it("addContact", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,2]"]);
	await kony.automation.playback.waitFor(["frmDvcFeatures","btn7"]);
	kony.automation.button.click(["frmDvcFeatures","btn7"]);
	await kony.automation.playback.waitFor(["frmContact","Btn1"]);
	kony.automation.button.click(["frmContact","Btn1"]);
	await kony.automation.playback.waitFor(["frmContact","lblDevContact"]);
	await kony.automation.playback.waitFor(["frmContact","navHome","Button0b4beb5a153b24d"]);
	kony.automation.button.click(["frmContact","navHome","Button0b4beb5a153b24d"]);
});