it("formBottomTOpAnimation", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,1]"]);
	await kony.automation.playback.waitFor(["frmAniAnd","segFirst"]);
	kony.automation.segmentedui.click(["frmAniAnd","segFirst[0,0]"]);
	await kony.automation.playback.waitFor(["frmAni22","navHome","Button0b4beb5a153b24d"]);
	kony.automation.button.click(["frmAni22","navHome","Button0b4beb5a153b24d"]);
});