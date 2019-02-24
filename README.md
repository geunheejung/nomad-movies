# Nomad Movies

iOS / Android Movie Discovery App built 
with React Native.

## Screens

- [ ] Movies
- [ ] TV Shows
- [ ] Search
- [ ] Detail

# 메모
Xcode, 안드로이드 스튜디오를 사용하지 않고, Expo는 리액트 네이티브를 작업하는 방식이다. 
앱의 변경이 존재할 경우 앱스토어에 승인 요청을 안해도 된다. -> javascript라서 코드를 다운로드 가능!🔥
## iOS 실행 방법
1. expo login
2. yarn start
3. expo client app 실행 -> PC에서 login한 계정과 네트워크가 동일해야 함.

## assets : font, sound, image... 
-> 미리 설치하는 이유 -> 앱에 들어가기전에 먼저 설정되어있어야함. -> preload
-> 코드에 변화가 있어도 앱스토어에 반영 요청을 하지 않고, 변경된 js 코드만 다운로드 받으면 된다.
```javascript
//image를 preload함.
import { AppLoading, Font, Asset } from 'expo';

await Asset.loadAsync([
  require('images/icon.png'),
]);

// expo에서 제공해주는 화면 Loader 
<AppLoading 
  startAsync={this.loadAssets} // AppLoading 컴포넌트가 렌더 시작할 때 인듯
  onFinish={this.handleLoaded} // 렌더링이 끝났을 때? 또는 언마운트 됬을 때?
  onError={this.handleError} // 위 과정에서 에러날 경우
/>
```

## navigation
모바일에는 브라우저처럼 history stack이 존재하지 않는다.
react-navigation lib은 이러한 history stack을 구현함과 동시에
관리해준다.
stack navigation은 페이지가 갈아치워지는게 아닌 엎어씌워지는거다.
stack navigation === card navigation
뷰를 교체하는 것이 아닌 뷰를 바꾸고, 우선 순위를 맨위로 오게 하는 것.
즉 큰 카드 네비게이션 안에 작은 네비게이션을 넣고 그럴 수 있다.

Tabs
  A Tabs
    - A-1Tab
    - A-2Tab

  A Detail Tabs

스택 네비게이션에서 각각의 탭들은 부모 자식 또는 형제 관계를 가질 수 있고,
스택 구조와 같이 우선순위가 정해져있다.
탭 네비게이션 안의 스크린이든, 메인 네비게이션 안의 스크린이든, 모든 스크린은 네비게이션 props를 가지고 있다.

다른 탭을 현재 스택 네비게이션 구조의 가장 앞으로 옮기고 싶다면, 즉 해당 탭으로 이동하고 싶다면
props로 전달되는 navigation의 naviate 메서드를 호출하는데 이 때 MainStackNavigation을 생성하면서
등록해놓은 탭 의 이름을 넣어주면 해당 탭이 어느 단계에 있든, 현재 탭이 어느 단계에 있든 상관없이 가장 최상단 스택으로 옮겨진다.