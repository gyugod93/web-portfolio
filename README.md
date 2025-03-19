## 3D 포트폴리오 웹 사이트

<p align="center">
  <a href="https://elaborate-malabi-a213e6.netlify.app/">
    <img src="https://img.shields.io/badge/🔗-3D 포트폴리오 확인하기-blue?style=for-the-badge" alt="3D 포트폴리오 확인하기">
  </a>
</p>

<p align="center">
  <b>Three.js와 React 활용한 3D 포트폴리오 </b>
</p>

---

### **📸 프로젝트 미리보기**

<p align="center">
  <img src="https://github.com/user-attachments/assets/b793e737-e01f-42b8-849d-44741457e900" width="60%" />
  <img src="https://github.com/user-attachments/assets/0bd76354-56af-4ae8-b445-9f8ee791377f" width="55%" />
  <img src="https://github.com/user-attachments/assets/8ed126e5-cdcf-475e-bdf4-249c9ca9b4fb" width="50%" />
  <img src="https://github.com/user-attachments/assets/c9cd586d-4b4c-4295-9f8e-57ad3c0c6d07" width="65%" />
  <img src="https://github.com/user-attachments/assets/599b441d-c60d-4e9b-9545-3324e88339ce" width="40%" />
  <img src="https://github.com/user-attachments/assets/b825a68e-34e2-425c-9538-dd82a3b8c92e" width="40%" />
</p>  

### **프로젝트 사용 기술**
+ React
+ Three.js
+ React Three Fiber & Drei(Three.js의 복잡한 API를 React 컴포넌트처럼 다루게 도와줌 + 반복적이고 복잡한 Three.js코드 생략)
+ Framer Motion(애니메이션 효과)
+ Tailwind CSS
+ EmailJS(메일 전송)
+ Vite(빌드 도구)

### 📂 폴더 구조
```plaintext
📁 public
├── 📁 robot                        # 3D 로봇 모델 및 텍스처
├── 📁 planet                       # 지구본 3D 모델 및 텍스처
│
📁 src
├── 📁 assets                       # 이미지 및 정적 리소스
├── 📁 components                   # 컴포넌트 모음
│   ├── 📁 About                    # 자기소개 섹션
│   ├── 📁 Contact                  # 연락처 섹션
│   ├── 📁 Experience               # 경력 섹션
│   ├── 📁 Feedbacks                # 피드백/추천사 섹션(사용안함)
│   ├── 📁 Hero                     # 메인 랜딩 섹션
│   ├── 📁 Loader                   # 로딩 인디케이터
│   ├── 📁 Navbar                   # 네비게이션 바
│   ├── 📁 Tech                     # 기술 스택 섹션
│   ├── 📁 Works                    # 프로젝트 섹션
│   ├── 📄 index.js                 # 컴포넌트 내보내기
│   └── 📁 canvas                   # Three.js 3D 요소
│       ├── 📁 Ball                 # 기술 스택 3D 볼
│       ├── 📁 Computers            # 컴퓨터 3D 모델(사용안함)
│       ├── 📁 Earth                # 지구 3D 모델
│       ├── 📁 Stars                # 별 파티클 효과
│       └── 📄 index.js             # 캔버스 요소 내보내기
├── 📁 constants                    # 정적 데이터 및 설정
│   └── 📄 index.js                 # 상수 데이터
├── 📁 hoc                          # 고차 컴포넌트
│   ├── 📁 SectionWrapper           # 섹션 래퍼 HOC
│   └── 📄 index.js                 # HOC 내보내기
├── 📁 utils                        # 유틸리티 함수
│   └── 📄 motion.js                # 애니메이션 설정
├── 📄 App.jsx                      # 메인 앱 컴포넌트
└── 📄 main.jsx                     # 앱 진입점
