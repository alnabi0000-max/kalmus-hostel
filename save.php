<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method']);
    exit;
}

$raw = file_get_contents('php://input');
$payload = json_decode($raw, true);

if (!is_array($payload) || ($payload['password'] ?? '') !== 'admin123') {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'auth']);
    exit;
}

$content = $payload['content'] ?? null;
if (!is_array($content) || count($content) > 300) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'payload']);
    exit;
}

$clean = [];
foreach ($content as $key => $value) {
    if (!is_string($key) || !is_string($value)) {
        continue;
    }
    if (!preg_match('/^[a-z0-9._-]{1,80}$/i', $key)) {
        continue;
    }
    $clean[$key] = mb_substr(trim($value), 0, 4000);
}

$file = __DIR__ . DIRECTORY_SEPARATOR . 'site-data.json';
$json = json_encode($clean, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
if ($json === false || file_put_contents($file, $json) === false) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'write']);
    exit;
}

echo json_encode(['ok' => true]);
