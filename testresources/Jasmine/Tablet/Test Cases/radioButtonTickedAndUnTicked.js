it("radioButtonTickedAndUnTicked", async function() {
	await kony.automation.playback.waitFor(["frmHome","segHome"]);
	kony.automation.segmentedui.click(["frmHome","segHome[0,0]"]);
	await kony.automation.playback.waitFor(["frmUICategory","uiCatSeg"]);
	kony.automation.segmentedui.click(["frmUICategory","uiCatSeg[0,1]"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	await kony.automation.playback.waitFor(["frmBasicWidgets","segFirst"]);
	kony.automation.segmentedui.click(["frmBasicWidgets","segFirst[0,9]"]);
	await kony.automation.playback.waitFor(["frmRdo","RadioButtonGroup083e657b73acd41"]);
	kony.automation.radiobuttongroup.click(["frmRdo","RadioButtonGroup083e657b73acd41"], "rbg1");
	kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup061975199fa1443"], "rbg1");
	kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup02d8ab108045247"], "rbg2");
	kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg2");
	kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg3");
	kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg1");
	kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg2");
	kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg3");
	kony.automation.radiobuttongroup.click(["frmRdo","CopyRadioButtonGroup0f75071373ead4c"], "rbg1");
});