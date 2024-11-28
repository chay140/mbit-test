# MBTI 성격 유형 검사 서비스
![android-chrome-192x192](https://github.com/user-attachments/assets/c467cd9c-c73a-46bf-99dc-5564974769de)

## 📖 목차

1. [프로젝트 설명](#프로젝트-설명)
2. [주요 기능](#주요-기능)
3. [프로젝트 구성](#프로젝트-구성)
4. [Trouble Shooting](#trouble-shooting)
5. [개발기간](#개발기간)
6. [기술스택](#기술스택)

## 프로젝트 설명
단순한 MBTI 테스트에 **회원가입/로그인**, **프로필 관리**, **테스트 결과 저장** 의 기능을 추가하여 만든 프로젝트. **JWT 인증**과 **RESTful API 통신**을 실습하는 애플리케이션이기도 합니다. (`Axios`, `Tanstack Query(React Query)`, ` json-server` 등을 활용합니다)

![HomePage](https://github.com/user-attachments/assets/4c342f2e-9fa5-4afb-a0b0-791e48c275c5)

## 주요 기능
### 회원가입 및 로그인 
 - JWT 인증을 사용한 간단한 회원가입과 로그인을 지원합니다
 - 회원가입 : 아이디, 비밀번호, 닉네임을 입력하여 계정을 생성할 수 있습니다
 - 로그인 : 가입한 아이디, 비밀번호로 로그인이 가능합니다.
 - 회원은 프로필 페이지에서 닉네임 수정이 가능합니다

### MBTI 테스트
 - 간단한 무료 MBTI 테스트를 통해 MBTI를 알아볼 수 있습니다
 - 테스트 후의 결과는 JSON Server로 저장 됩니다

### 테스트 결과 보기
 - 테스트 결과를 JSON Server로 관리하여 조회가 가능합니다


## 프로젝트 구성
```
src/
├── api/
│   ├── auth.js
│   ├── axiosInstance.js
│   ├── testResults.js
│   └── testAxiosInstance.js
├── components/
│   ├── [재사용 가능한 UI 컴포넌트 목록]
├── context/
│   ├── [Context API 파일]
├── data/
│   ├── [테스트 결과 데이터를 관리하는 JSON 또는 파일]
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Profile.jsx
│   ├── Signup.jsx
│   ├── TestPage.jsx
│   └── TestResult.jsx
├── shared/
│   ├── ProtectedRoute.jsx
│   └── Router.jsx
├── utils/
│   ├── [테스트 결과 계산 로직 및 기타 유틸리티 함수]
├── App.jsx
└── main.jsx

```
- `api/`: API 호출 및 인증 관련 로직을 관리하는 디렉토리
    - `auth.js`: 사용자 인증을 처리하는 파일
    - `axiosInstance.js`: 인증 토큰이 포함된 axios 인스턴스를 설정
    - `testResults.js`: 테스트 결과를 관리하는 API 호출 파일
    - `testAxiosInstance.js`: 테스트 결과 전용 axios 인스턴스를 설정
- `components/`: 각 페이지에서 사용하는 재사용 가능한 UI 컴포넌트를 관리하는 디렉토리
- `context/`: Context API를 사용한 전역 상태 관리 디렉토리
    - 주로 사용자 인증 상태 관리
- `data/`: 테스트 결과를 생성하기 위한 정적 데이터 파일
- `pages/`: 애플리케이션의 주요 페이지 레이아웃을 구성하는 디렉토리
    - `Home.jsx`: 홈 페이지
    - `Login.jsx`: 로그인 페이지
    - `Profile.jsx`: 사용자 프로필 페이지
    - `Signup.jsx`: 회원가입 페이지
    - `TestPage.jsx`: 테스트 페이지
    - `TestResult.jsx`: 테스트 결과 페이지
- `shared/`: 라우터 관련 파일
    - `ProtectedRoutes.jsx`: 인증된 사용자만 접근할 수 있는 라우트를 관리
    - `Router.jsx`: 애플리케이션의 모든 라우팅을 설정
- `utils/`: 테스트 결과 계산 로직 및 기타 유틸리티 함수 파일


## Trouble Shooting
### JWT 인증 오류
<details>
<summary>원인 분석 및 해결방안</summary>
<div markdown="1">

#### ⚙️ 문제 상황 및 원인 분석
JWT 인증으로 서버에 요청을 보내도 에러가 뜨며 처리가 안되거나, 오류의 원인을 찾아내는데 어려움을 겪었습니다

#### 🚀 import 확인과 개발자 도구 팁
에러를 콘솔에 찍어도 문제 확인이 어려운 경우 개발자 도구를 활용하며 문제를 해결해나갔습니다.

대표적인 에러로는 회원가입시 이미 등록된 유저와 동일한 아이디 입력시 409에러가 떠서 문제를 일으키는 것을 확인했습니다.

<br>
</div>
</details>

**블로그 포스팅** : [MBTI 테스트 만들기1 : JWT 인증](https://velog.io/@chay140/MBTI-테스트-만들기)


### json-server 배포 오류
<details>
<summary>원인 분석 및 해결방안</summary>
<div markdown="1">

#### ⚙️ 문제 상황 및 원인 분석
데이터베이스를 위한 서버 배포시 발생한 오류로, localhost json-server에서 URL만 바꿨을 뿐인데 테스트 결과가 저장되지도 않고, 불러와지지도 않았습니다. 바꾼 부분이 test db 서버 URL이었기 때문에 이 부분을 중심으로 문제를 파악하려고 했습니다.

#### 🚀 요청 URL 확인 및 axios instance 문법 수정
Glitch에서 받은 live server URL 후에 db 경로를 제대로 설정하지 않아서 문제가 생겼습니다. 이 부분을 "..../testResults"를 추가해주어 테스트를 올바른 경로에 추가할 수 있도록 수정했습니다

기존 URL을 바꾸는 과정에서 axios.post()의 인자에, 경로 변수를 지워버린 것을 발견하여 추가해주었습니다. 이후 원활히 작동했습니다.

<br>
</div>
</details>

**블로그 포스팅** : [MBTI 테스트 만들기2 : json-server 배포 오류 찾기](https://velog.io/@chay140/MBTI-테스트-만들기2-json-server-배포-오류-찾기)


### Vercel에서 ProtectedRoute 오류
<details>
<summary>원인 분석 및 해결방안</summary>
<div markdown="1">

#### ⚙️ 문제 상황 및 원인 분석
Vercel을 통해 배포한 프로젝트에서 Protected Route가 작동하지 않는 오류를 발견하였습니다. local에서 돌릴때는 문제가 없었으나, Vercel에 배포과정 중 route의 설정이 local과 달라 생긴 문제라고 판단했습니다.

#### 🚀 vercel.json 설정
구글링을 해본 결과, vercel에서 react-router-dom이 예상대로 작동하지 않는 일이 많이 발생하는데 이는 라우팅 방식의 차이가 있어서 local과는 다른 기본값을 따로 저장해주어야 했습니다.

vercel.json이라는 파일을 생성하여
```js
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
위의 내용을 포함하여 재배포한 결과, 문제를 해결하였습니다.

<br>
</div>
</details>

**블로그 포스팅** : [MBTI 테스트 만들기3 : Vercel에서 ProtectedRoute 오류 해결](https://velog.io/@chay140/MBTI-테스트-만들기3-Vercel에서-ProtectedRoute-오류-해결)



## 개발 기간
* 2024.11.25 (월) ~ 2024.11.28 (목)

## 기술 스택
### Language
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Auth API
![jwt](https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=61DAFB)
![axios](https://img.shields.io/badge/Axios-0058CC?style=for-the-badge&logo=axios&logoColor=white)

### Library
![react](https://img.shields.io/badge/React-555555?style=for-the-badge&logo=react&logoColor=61DAFB)
![tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![react-router-dom](https://img.shields.io/badge/React_Router-0081CB?style=for-the-badge&logo=react-router&logoColor=white)
