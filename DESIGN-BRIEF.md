# homebutler Landing Page — Design Brief

## 프로젝트 정보
- **제품**: homebutler — single-binary homelab management CLI + MCP server
- **GitHub**: https://github.com/Higangssh/homebutler
- **현재**: ⭐81, v0.13.0, Go, 15개 앱 설치, MCP 15개 도구
- **대상**: 셀프호스팅 개발자, 홈랩 운영자, DevOps

## 핵심 메시지
- **한 줄**: "Your homelab, one binary away."
- **서브**: Monitor, control, backup, and self-heal — from chat, AI, or terminal.
- **차별점**: 
  - Single binary, zero dependencies
  - AI-native (MCP built-in)
  - Self-healing (alerts → auto-fix)
  - Backup drill (prove your backups work)

## 디자인 원칙 (Evil Martians 100 dev tool 연구 기반)

### Hero Section
- 중앙 정렬 레이아웃
- 큰 타이틀 + 서브 카피
- **터미널 시뮬레이션 애니메이션** — homebutler 명령어가 실시간으로 실행되는 것처럼 보이는 가짜 터미널
  - `homebutler status` → 서버 상태 출력
  - `homebutler backup drill --all` → drill 결과 출력
  - `homebutler alerts --watch` → self-healing 실행
  - 이런 것들이 순차적으로 재생되는 시뮬레이션
- CTA 2개: "Install" (primary) + "View on GitHub" (secondary)

### Trust Block
- GitHub 스타 수 뱃지
- "Works with" 로고: Claude, ChatGPT, Cursor, Terminal

### Feature Blocks (4~6개)
1. **Self-Healing** — "서버 죽으면 알려주고 살려놓음"
   - alerts YAML 코드 스니펫
   - 시뮬레이션: 디스크 가득 → prune → resolved

2. **Backup Drill** — "백업이 진짜 되는지 증명"
   - drill 출력 예시 (✅ DRILL PASSED)
   - 격리 환경 다이어그램

3. **One-Command Install** — "15개 앱, 한 줄로 설치"
   - `homebutler install uptime-kuma` 시뮬레이션
   - 지원 앱 아이콘 그리드

4. **AI-Native (MCP)** — "채팅으로 서버 관리"
   - Claude/ChatGPT에서 homebutler 쓰는 스크린샷
   - MCP 연동 다이어그램

5. **Multi-Server** — "SSH로 여러 서버 동시 관리"
   - `homebutler status --all` 출력

6. **Web + TUI Dashboard** — "브라우저와 터미널 둘 다"
   - 웹 대시보드 스크린샷
   - TUI 스크린샷

### Architecture Section
- 3-layer 다이어그램 (Chat → AI Agent → homebutler)
- "homebutler is Layer 1" 설명

### Install Section
```bash
curl -fsSL https://raw.githubusercontent.com/Higangssh/homebutler/main/install.sh | sh
```
- Homebrew, npm, go install 대안도 표시

### Footer
- GitHub, License (MIT), Star 버튼

## 기술 스택
- **정적 사이트**: HTML + CSS + JS (프레임워크 없이 가볍게)
- **호스팅**: GitHub Pages
- **도메인**: 추후 homebutler.dev 연결
- **애니메이션**: CSS + 가벼운 JS (터미널 타이핑 효과)

## 레퍼런스 사이트
1. **beszel.dev** — 깔끔한 dev tool 랜딩 (같은 카테고리)
2. **k9scli.io** — CLI 도구 랜딩 (K8s TUI)
3. **Linear.app** — 세련된 제품 페이지 (애니메이션 참고)
4. **Coolify.io** — 셀프호스팅 도구 랜딩
5. **Waveterm.dev** — 터미널 도구 (GitHub 트렌딩)

## 색상 팔레트
- **Primary**: #00ADD8 (Go blue) 또는 진한 네이비
- **배경**: 다크 테마 (#0a0a0a ~ #1a1a1a)
- **액센트**: 밝은 그린 (#10b981) — 성공/건강
- **경고**: 앰버 (#f59e0b) — 알림
- **위험**: 레드 (#ef4444) — 에러

## 보안 주의
- 개인정보 포함 금지 (이메일, IP, 전화번호 등)
- 스크린샷에 민감한 데이터 없어야 함
- 모든 데모 데이터는 가짜
