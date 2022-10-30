import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
  // // div生成
  // const div = document.createElement("div");
  // div.className = "list-row";
  // // console.log(div);

  // // button(完了)タグ追加
  // const completeButton = document.createElement("button");
  // completeButton.innerText = "完了";
  // // console.log(completeButton);
  // completeButton.addEventListener("click", () => {
  //   // alert("完了");
  //   // 削除
  //   deleteFromIncompleteList(completeButton.parentNode.parentNode);
  //   // 追加する要素
  //   const addTarget = completeButton.parentNode;
  //   // TODO内容テキストの取得
  //   const text = addTarget.firstElementChild.innerText;
  //   addTarget.textContent = null;
  //   // console.log(addTarget);
  //   // console.log(text);

  //   // liタグ生成
  //   const li = document.createElement("li");
  //   li.innerText = text;
  //   // console.log(li);
  //   const backButton = document.createElement("button");
  //   backButton.innerText = "戻す";
  //   backButton.addEventListener("click", () => {
  //     // alert("戻る");
  //     const deleteTarget = backButton.parentNode;
  //     document.getElementById("complete-list").removeChild(deleteTarget);

  //     const test = backButton.parentNode.firstElementChild.innerText;
  //     console.log(test);
  //   });
  //   // divタグの子要素に各要素を設定
  //   addTarget.appendChild(li);
  //   addTarget.appendChild(backButton);
  //   console.log(addTarget);

  //   document.getElementById("complete-list").appendChild(addTarget);
  // });

  // const deleteButton = document.createElement("button");
  // deleteButton.innerText = "削除";
  // deleteButton.addEventListener("click", () => {
  //   // alert("削除");
  //   // 推された削除ボタンの親タグを未完了リストから削除
  //   deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  // });

  // // pタグ生成
  // const ptag = document.createElement("p");
  // // console.log(li);
  // ptag.innerText = inputText;

  // // divタグの子要素に各要素を設定
  // div.appendChild(ptag);
  // div.appendChild(completeButton);
  // div.appendChild(deleteButton);
  // // console.log(div);

  // // liタグ生成
  // const li = document.createElement("li");
  // li.appendChild(div);

  // // 未完了リストに追加
  // document.getElementById("incomplete-list").appendChild(li);

  // alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (inputText) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);

  // button(完了)タグ追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // console.log(completeButton);
  completeButton.addEventListener("click", () => {
    // alert("完了");
    // 削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    // 追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストの取得
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    // console.log(addTarget);
    // console.log(text);

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // console.log(li);
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // alert("戻る");
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
      // console.log(text);
    });
    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // alert("削除");
    // 推された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // pタグ生成
  const ptag = document.createElement("p");
  // console.log(li);
  ptag.innerText = inputText;

  // divタグの子要素に各要素を設定
  div.appendChild(ptag);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // console.log(div);

  // liタグ生成
  const li = document.createElement("li");
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};
