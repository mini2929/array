console.log("test");
// 배열 : 성격이 비슷한 여러개의 자료값들을 그룹화하기 위한 자료형
const colors = ["red","green", "blue"];
console.log(colors);
colors[0] = "hotpink";
// 배열의 값을 뽑을 때 : 배열명[순번] : 해당 순번의 배열 데이터를 뽑아냄
console.log(colors);

// const로 선언한 변수값은 담겨있는 값이 원시형 자료일 때 덮어쓰기 불가
// const
// colors = [1,2,3] 새로운 값 덮어쓰기 불가능

for(let i=0; i < 3; i++) {
    console.log(colors[i])
}
for(let i = 0; i < 3; i++) console.log(colors[i]);
// var : 호이스팅 방지하기 위해 잘 사용하지 않음

console.log(colors.length);
// 배열명 : .length : 해당 배열의 개수

for(let i = 0; i < colors.length;i++) console.log(colors[i]);

// forEach 순수배열뿐만 아니라 유사배열(배열은 아닌데 배열같은 것. ex. queryselectAll 로 가져온 것)또한 반복처리 가능(반복되는 문서 객체요소도 반복처리 가능)
colors.forEach((data, idx) => {
    console.log("data", data);
    console.log("idx", idx);
});

// 단점 : 배열 반복기능만 있음

// 순수배열만 반복처리 기능 (유사배열 반복불가 : DOM 요소 반복처리 불가)
// 기존배열을 완전히 복사해서 새로운 배열로 반환 기능
colors.map((data, idx) => {
    console.log("map-data", data);
    console.log("map-data", idx);
});

// 원본 배열 생성
const even = [2, 4, 6];
console.log(even); // [2, 4, 6]

// 복사!! (대입함수)
const newEven1 = even;
console.log(newEven1); // [2, 4, 6]

// 복사가 된 newEven1이라는 배열의 첫번째 값을 수정
newEven1[0] = 0;
// 복사된 배열의 첫번째 값이 변경됨
console.log(newEven1); // [0, 4, 6]

// 수정하지 않은 원본 배열 확인
console.log(even); // [0, 4, 6]
// 수정하지 않았음에도 원본도 같이 수정됨 (원본 데이터 훼손됨)

// 위와 똑같은 방법으로 이번엔 원시형 자료 복사
let num = 0;
let newNum = num;
newNum++;
console.log(newNum);
console.log(num);
// 원시형 자료는 변수값을 복사하는 식으로 완전복사(deep copy 가능) 불변성 유지됨

const text = "Hello";
console.dir(text);

const Newtext = text;
const Ptext = Newtext + 'mini';
console.log(Ptext);
console.log(Newtext);
console.log(text);

const arr = [1, 2, 3]
console.log(arr);

arr[0] = 0;
arr[1] = 0;
arr[2] = 0;

console.log(arr);

// 새로운 배열이 메모리 힙상에 생성되면서 새로운 참조값이 생성되고
// 새롭게 생성된 참조값으로 기존 callstack상의 arr값 자체가 변경이 일어나므로 에러발생


const originArr1 = [1, 2, 3];
console.log(originArr1);

const newArr1 = originArr1;
// 기존 원본 배열을 새로운 newArr1에 옮겨담아서 복사
// call stack상에서 originArr라는 변수에 있던 참조 링크값만 복사되서 각각 newArr1, originArr에 있음
// shallow copy(얕은 복사) : 원본 데이터는 그대로 있고 참조링크만 새로운 변수에 복사된 형태

// 새로운 참조 링크가 복사된 newArr1를 불러와서 값을 변경처리하면
// 결국 가리키고 있는 메모리힙상의 값은 동일하기 때문에 원본의 훼손이 일어남(불변성 유지 안됨)
newArr1[0] = 0;
console.log(newArr1); // [0,2,3]
console.log(originArr1); //[0,2,3]

/* 전개연산자 (Spread Operator)
점 세개로 표시
배열, 객체 등의 요소를 펼치거나 복사하는데 사용됨
(배열의 요소를 펼쳐서 새로운 배열을 만들거나 배열을 합침)
전개 연산자는 나머지 매개변수와 유사하게 사용되며 이를 통해 인자의 나머지 배열로 받을 수 있음
: 얕은 복사가 일어나는 것을 방지하기 위해 아예 메모리힙상의 값을 물리적으로 꺼내서 펼친 뒤, 새로운 배열, 객체로 다시 묶어주는 형태(완전복사 : Deep Copy)

힙메모리상에 있는 값 자체를 꺼내서 펼친 뒤 복사한 형태
그렇게 복사가 된 형태의 데이터를 다시 새롭게 배열로 그룹화
힙메모리상에 새로운 값이 복사되고 새로운 참조값이 생기므로 복사된 배열의 전용 참조값이 newArr에 할당됨

*/
const originArr2 = [1, 2, 3];
const newArr2 = [...originArr2];
// newArr2에는 물리적으로 새로운 메모리힙상의 데이터를 잠조하고 있기 때문에
// 해당 참조값이 가리키는 메모리힙상의 값을 고쳐도 원본은 훼손이 일어나지 않음(불변성 유지됨)
newArr2[0] = 0;
console.log(newArr2); //[0, 2, 3]
console.log(originArr2); //[1, 2, 3]