it("formWithNestedList", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.scrollToRow(["frmBasicWidgets","segFirst[0,15]"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,15]"]);
	await kony.automation.playback.waitFor(["frmNList","segFirst"]);
	kony.automation.segmentedui.click(["frmNList","segFirst[0,0]"]);
	await kony.automation.playback.waitFor(["frmNLst2","segFirst"]);
	kony.automation.segmentedui.click(["frmNLst2","segFirst[0,0]"]);
	await kony.automation.device.deviceBack();
	await kony.automation.playback.waitFor(["frmNList","segFirst"]);
	kony.automation.segmentedui.click(["frmNList","segFirst[0,1]"]);
	await kony.automation.playback.waitFor(["frmNLst2","segFirst"]);
	kony.automation.segmentedui.click(["frmNLst2","segFirst[0,1]"]);
});