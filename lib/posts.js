//サーバーサイドで実行されるAPIにフェッチするための関数を作成する
import fetch from "node-fetch";//node-fetchのimport文は不要になったらしい
const apiUrl =　"https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
    const res = await fetch(new URL(apiUrl));//データ化
    const posts = await res.json();//Json形式に変換
    return posts;
}