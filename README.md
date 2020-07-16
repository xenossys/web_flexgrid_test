# 개요

- 후에 홈페이지 만들기 위한 kit
- 적용된 사항
  - api 호출 method
  - style layout
  - router

# prettier 적용

- src/.prettierrc 참고

# redux-saga

- api 호출 방법
  - src/module/redux/apiRedux/reducers에 양식이라는 파일을 참고해서 파일을 작성하고

# 함수형 vs 클래스형

- 해당 프로젝트는 함수형으로 작성하도록 한다.

# typescript

- 추후버전부터 적용

# 폴더구조 (아토믹 디자인 패턴)

- Atoms

  - UI 구성하는 요소중 가장 작은 요소
  - 특정 함수가 적용되기 이전의 상태
  - 글꼴이나 스타일의 속성은 적용됨
  - ex) 버튼, 체크박스, 입력영역, 라디오 버튼

- Molecules

  - 여러 Atoms를 조합해서 만든다.
  - 재 사용성이 유지된다.
  - 가능한 단순한 형태로 유지

- Organisms

  - 재사용성을 크게 요구하지 않음
  - 페이지의 해더, 페이지의 푸터
  - Atoms와 Moleclues를 이용해서 만듬

- Templates

  - 페이지에 표시할 실제 데이터가 반영되기 전의 상태

- Pages
  - Router에 들어가는 일반적인 페이지 (데이터가 반영됨)

# 스타일 적용

- styled-component 를 적용한다.

# 앞으로 ...

- 예시페이지 지속해서 추가 예정
- jest 적용 예정
- typescript 적용 예정
