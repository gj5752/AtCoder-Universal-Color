// AtCoder Problems の難易度の丸の色変更

// すべてのロードが終わるまで待機
window.addEventListener("load", main, false);

function main(e) {
	// table-problem の要素が取得できるまで待機
	const jsInitCheckTimer = setInterval(jsLoaded, 500);
	function jsLoaded() {
		if (document.getElementsByClassName("table-problem").length > 0) {
			clearInterval(jsInitCheckTimer);

			let old_green = "rgb(0, 128, 0)";
			let old_brown = "rgb(128, 64, 0)";
			let old_cyan = "rgb(0, 192, 192)";

			let new_green = "rgb(120, 196, 150)";
			let new_brown = "rgb(138, 59, 44)";
			let new_cyan = "rgb(104, 200, 242)";

			// 属性の変更で色の変換
			const circles = document.querySelectorAll(".difficulty-circle");
			circles.forEach((circle) => {
				var style = circle.getAttribute("style");
				if (style) {
					style = style.replaceAll(old_green, new_green);
					style = style.replaceAll(old_brown, new_brown);
					style = style.replaceAll(old_cyan, new_cyan);
					circle.setAttribute("style", style);
				}
			});
		}
	}
}
