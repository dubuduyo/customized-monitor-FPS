let frames = 0;

const create = () => {
  const div = document.getElementById("root");
  div.style.position = "fixed";
  div.style.left = "0px";
  div.style.right = "0px";
  div.style.width = "50px";
  div.style.height = "50px";

  div.style.backgroundColor = "pink";
  div.style.color = "black";
  return div;
};

const panel = create();
let start = window.performance.now();

const tick = () => {
  frames++; // requestAnimationFrame 이 실행될 때마다 증가
  const now = window.performance.now(); // 시간 체크를 위해 사용 실행될 때마다 계속 새로운 값 입력
  if (now >= start + 1000) {
    // FPS 는 1초를 전제하기 때문에 1초로 설정
    panel.innerText = frames;
    frames = 0; // 다음 1초가 시작할 때 0부터 시작 모니터가 신호를 보낼 때마다 1씩 증가
    start = now;
  }
  window.requestAnimationFrame(tick); // 주사율 감지, 신호가 오면 tick 호출되어 실행(반복)
};

tick(); // tick 을 맨 처음에 실행되도록 함 모니터에서 신호가 오면 호출되어 코드 실행

// 탭을 옮기면 CPU 가 연산 및 처리를 해야 하니까 그동안 모니터가 CPU 를 이용 못 함 그래서 모니터 FPS 숫자가 감소
