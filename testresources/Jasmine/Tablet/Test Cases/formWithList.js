it("formWithList", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,14]"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,14]"]);
	await kony.automation.playback.waitFor(["frmLst","segFirst"]);
	kony.automation.segmentedui.click(["frmLst","segFirst[0,0]"]);
	await kony.automation.playback.waitFor(["frmLst","segFirst"]);
	kony.automation.segmentedui.click(["frmLst","segFirst[0,1]"]);
});