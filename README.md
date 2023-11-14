# 📚 Preonboarding 2번째 기업 과제

** 기존 프로젝트르 갖고 작업하여 Contributor는 여러 명이지만 개인이 작업한 결과물입니다.

## 🧪 실행 방법

1. git clone
2. yarn install
3. yarn start

 
## 🧶 기술 스택
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## 🔎 작업 내역
각 링크를 클릭하시면 관련 커밋 기록으로 이동합니다 👩‍💻

### 1. 자바스크립트 코드를 타입스크립트로 변환
   * [devDependency에 타입스크립트 관련 설정 추가](https://github.com/Yena-Yun/preonboarding-mission-2/blob/main/package.json)🔗
   * [baseInstance(axios 인스턴스)에 타입 지정](https://github.com/Yena-Yun/preonboarding-mission-2/commit/a61c0176537d9bf697c45a41022aaa7e54763535)🔗
   * 새로 작성한 모든 코드를 타입스크립트로 작성

### 2. [Jest 단위 테스트 진행](https://github.com/Yena-Yun/preonboarding-mission-2/commit/512075e33e39373552e0c902023652cf27e50d92)🔗
   * 비동기 API 호출 로직 테스트
   * API 호출 시 1번째 page에서 10개의 데이터를 올바르게 받아오는지 확인
   * 테스트 코드를 타입스크립트로 작성


### 3. API 호출 동안 로딩 스피너 적용
* 사용자 경험을 위해 API 호출 대기 시간 동안 로딩 스피너 표시

### 4. [Vercel 배포 후 발생한 env 에러 해결(블로그)](https://velog.io/@yena1025/vercel%EB%A1%9C-%EB%B0%B0%ED%8F%AC%ED%95%9C-%EC%95%B1%EC%97%90-.env%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
* Network 탭에서 API URL에 환경 변수(env)가 적용되지 않은 것을 확인
* Vercel에서 로컬의 env 값을 추가하고 재배포

