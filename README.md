# 📚 Preonboarding 2번째 기업 과제
자동 완성 검색 바

=> 각 링크를 클릭하시면 관련된 커밋 기록으로 이동합니다. 👩‍💻


## 🔎 작업 내역
* 기존 코드에 **타입스크립트 적용**
   * [devDependency에 타입스크립트 관련 설정 추가](https://github.com/Yena-Yun/preonboarding-mission-2/blob/main/package.json)🔗
   * [baseInstance(axios 인스턴스)에 타입 지정](https://github.com/Yena-Yun/preonboarding-mission-2/commit/a61c0176537d9bf697c45a41022aaa7e54763535)🔗
   * 새로 작성한 모든 코드를 타입스크립트로 작성

* [**useDebounce 커스텀 훅** 작성](https://github.com/Yena-Yun/preonboarding-mission-2/commit/ecdf3425948b32f7bbf367d963dbd57230a532c0)🔗

   * [인풋 컴포넌트에 useDebounce 훅 적용](https://github.com/Yena-Yun/preonboarding-mission-2/commit/9d2a2a4451b74691c4b0eb8b2fffe44c141ee169)🔗
 
* [axios 인스턴스(apiRequest)로 검색 결과를 불러오는 API 로직 작성](https://github.com/Yena-Yun/preonboarding-mission-2/commit/47f1c8d0547aa98f2fda498657f347364ebd0948)🔗

* [useDebounce 훅에서 isLoading 상태를 반환하고 디바운스된 검색 API가 동작하는 동안 로딩 스피너 표시](https://github.com/Yena-Yun/preonboarding-mission-2/commit/a694858681a5e73eb549e4143d468011c9636616)🔗


* [**Jest**를 활용한 **단위 테스트** 구현](https://github.com/Yena-Yun/preonboarding-mission-2/commit/512075e33e39373552e0c902023652cf27e50d92)🔗
   * API 호출하기 테스트
   * 테스트 코드를 타입스크립트로 작성


* [유저 행동에 따라 인풋 스타일 변경 (hover, 검색 중, 검색 완료 등)](https://github.com/Yena-Yun/preonboarding-mission-2/commit/6419ae4395968385e19f7492148104100be329f8)🔗

* Figma 디자인 화면을 활용하여 구현 🎨

## 💻 실행 방법

클론 -> 디펜던시와 패키지 설치 -> 앱 실행

```bash
git clone -> npm i OR yarn -> npm run start OR yarn start
```

