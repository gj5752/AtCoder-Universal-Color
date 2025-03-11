// AtCoder Problems の難易度の丸の色変更

// すべてのロードが終わるまで待機
window.addEventListener("load", main, false);

function main(e) {
	// table-problem の要素が取得できるまで待機
	const jsInitCheckTimer = setInterval(jsLoaded, 250);
	function jsLoaded() {
		if (document.getElementsByClassName("table-problem") != null) {
			clearInterval(jsInitCheckTimer);

			var problems = document.getElementsByClassName("table-problem");

			let old_green = "rgb(0, 128, 0)";
			let old_brown = "rgb(128, 64, 0)";
			let old_cyan = "rgb(0, 192, 192)";

			let new_green = "rgb(120, 196, 150)";
			let new_brown = "rgb(138, 59, 44)";
			let new_cyan = "rgb(104, 200, 242)";

			// 色の書き換え
			for (let i = 0; i < problems.length; i++) {
				var problem = problems[i].innerHTML;
				problem = problem.replaceAll(old_green, new_green);
				problem = problem.replaceAll(old_brown, new_brown);
				problem = problem.replaceAll(old_cyan, new_cyan);
				document.getElementsByClassName("table-problem")[i].innerHTML = problem;
			}
		}
	}
}
