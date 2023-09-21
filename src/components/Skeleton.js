import classNames from "classnames";

function Skeleton({ times }) {
  //     const boxes = [];
  //     for (let i = 0; i < times; i++) {
  //       boxes.push(<div key={i} />);
  //     }

  //     return boxes;

  // for loop 없이 간결하게 작성하기

  const boxes = Array(times)
    .fill(0) //새로 생성된 배열을 값 0으로 채운다.
    .map((_, i) => {
      //배열 요소를 매핑하고 <div> 요소의 새 배열 생성 map : 배열의 각 요소를 반복하는 데 사용한다.
      return <div key={i} />;
    });

  return boxes;
}

export default Skeleton;
