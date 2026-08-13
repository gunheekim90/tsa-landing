#!/usr/bin/env python3
"""
TwoStepsAhead 브랜드 아이콘 생성.

마크: 사명 그대로 '두 걸음 앞서' — 오른쪽 위로 올라가는 2단 계단.
16px에서도 읽혀야 하므로 텍스트 없이 단색 배경 + 흰 실루엣만 쓴다.
(구글 검색결과는 흰 배경이라 유채색 배경이 목록에서 구분된다.)
"""
from PIL import Image, ImageDraw
import pathlib, sys

OUT = pathlib.Path(sys.argv[1])
OUT.mkdir(parents=True, exist_ok=True)

PURPLE = (109, 46, 240)     # --lt-purple 브랜드 액센트
WHITE = (255, 255, 255)
TINT = (226, 216, 255)      # 윗단 계단 — 16px에서도 읽히도록 흰색에 가깝게

S = 1024  # 마스터 해상도


def draw_mark(size=S, bg=PURPLE, pad_ratio=0.0):
    """정사각 캔버스에 2단 계단 마크를 그린다."""
    img = Image.new('RGB', (size, size), bg)
    d = ImageDraw.Draw(img)
    u = size / 16.0  # 그리드 단위

    inset = size * pad_ratio
    left, right = 2.7 * u + inset, 13.3 * u - inset
    bottom = 12.9 * u - inset
    mid_x = (left + right) / 2
    step_h = (bottom - (3.1 * u + inset)) / 2
    top = 3.1 * u + inset

    # 아래 단 (왼쪽, 큰 덩어리)
    d.rectangle([left, top + step_h, mid_x - u * 0.28, bottom], fill=WHITE)
    # 위 단 (오른쪽, 한 칸 위로)
    d.rectangle([mid_x + u * 0.28, top, right, bottom], fill=TINT)
    return img


master = draw_mark()
master.save(OUT / 'icon-1024.png', optimize=True)

# 각 용도별 크기
for name, px in [
    ('favicon-16.png', 16),
    ('favicon-32.png', 32),
    ('favicon-48.png', 48),
    ('apple-touch-icon.png', 180),
    ('icon-192.png', 192),
    ('icon-512.png', 512),
]:
    master.resize((px, px), Image.LANCZOS).save(OUT / name, optimize=True)

# favicon.ico — 구글은 48의 배수를 선호하므로 16/32/48 동봉
master.resize((48, 48), Image.LANCZOS).save(
    OUT / 'favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)]
)

# 구조화 데이터 logo — 여백을 더 줘 로고답게
draw_mark(512, pad_ratio=0.06).save(OUT / 'logo-square.png', optimize=True)

print('생성 완료:', ', '.join(sorted(p.name for p in OUT.iterdir())))
