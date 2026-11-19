const translations = {
  rw: {
    tagline:"Ubuhinzi bw'ikoranabuhanga",menu:"MENU",overview:"Ahabanza",monitoring:"Ibyapimwe",irrigation:"Kuhira",alerts:"Ubutumwa",history:"Amateka",settings:"Igenamiterere",
    localNote:"Igenzura ryo kuhira rikorerwa kuri device",farmer:"Umuhinzi",prototype:"Prototype mode",farmSystem:"UBUHINZI BW'IKORANABUHANGA",demoConnected:"Demo irakora",
    welcomeTitle:"Murakaza neza ku murima wawe",welcomeText:"Kurikirana ubutaka n'ikirere, uhite umenya igihe cyo kuhira.",todaySummary:"Imiterere y'ubu",latestReadings:"Ibipimo bya sensor (amakuru y'igerageza)",demoData:"DEMO DATA",
    temperature:"Ubushyuhe",airHumidity:"Ububobere bw'umwuka",soilMoisture:"Ububobere bw'ubutaka",pumpStatus:"Imiterere ya pompe",airTemperature:"Ubushyuhe bw'umwuka",relativeHumidity:"Ububobere bw'umwuka",dryStatus:"Ubutaka bwumye",wetStatus:"Ubutaka burimo amazi ahagije",pumpOff:"Pompe irazimye",pumpOn:"Pompe irakora",
    soilLevel:"Ububobere bw'ubutaka",soilLevelDesc:"Igipimo cya nyuma cyabonetse",currentMoisture:"Ubu",dry:"Humye",good:"Byiza",wet:"Byinshi",quickIrrigation:"Kuhira vuba",quickIrrigationDesc:"Hitamo uburyo bwo kuhira",controlMode:"Uburyo bwo kugenzura",automatic:"Automatic",manual:"Manual",turnPumpOn:"Fungura pompe",turnPumpOff:"Zimya pompe",safetyNote:"Mu buryo bwa AUTO, pompe ifunguka iyo ubutaka bwumye kurenza urugero washyizeho.",
    liveMonitoring:"Gukurikirana ibipimo",monitoringDesc:"Amakuru ava kuri sensors za greenhouse.",sensorInfo:"Ibyerekeye sensors",sensorInfoDesc:"Ibikoresho biteganyijwe muri prototype",dhtDescription:"Ipima ubushyuhe n'ububobere bw'umwuka",soilDescription:"Ipima ububobere bw'ubutaka",wifiDescription:"Itanga Wi-Fi communication",planned:"Iteguwe",
    irrigationControl:"Genzura kuhira",irrigationDesc:"Automatic cyangwa manual control ya pompe y'amazi.",irrigationMode:"Uburyo bwo kuhira",chooseMode:"Hitamo uburyo bukwiye",autoDesc:"Sisitemu ifata icyemezo ikurikije ububobere.",manualDesc:"Umuhinzi ni we ufungura cyangwa azimya pompe.",waterPump:"Pompe y'amazi",pumpDesc:"Igenzura rya pompe (demo)",manualOnlyNote:"Iyi button ikora gusa muri Manual mode. AUTO igenzurwa n'igipimo cy'ubutaka.",irrigationThreshold:"Urugero rwo gutangiza kuhira",thresholdDesc:"Pompe izafunguka iyo ububobere buri munsi y'uru rugero.",saveThreshold:"Bika urugero",
    alertsTitle:"Ubutumwa n'imbuzi",alertsDesc:"Ubutumwa bugufasha gufata ibyemezo ku murima.",testVoice:"Gerageza ijwi ryanjye",voiceTitle:"Ubutumwa bw'ijwi ryawe",voiceDesc:"GREENPULSE ikoresha amajwi wafashe kuri telefone.",voiceUnavailable:"Recording ntiyabonetse. Reba niba file iri muri folder ya voices.",
    historyTitle:"Amateka y'ibipimo",historyDesc:"Ibikorwa byabaye muri iyi demo session.",clearHistory:"Siba amateka",time:"Igihe",event:"Igikorwa",details:"Ibisobanuro",
    settingsTitle:"Igenamiterere",settingsDesc:"Hindura uko GREENPULSE ikora.",language:"Ururimi",languageDesc:"Hitamo ururimi ukoresha.",voiceAlerts:"Imbuzi z'ijwi",voiceAlertsDesc:"Koresha amajwi wafashe igihe hari ikibazo.",autoIrrigation:"Automatic irrigation",autoIrrigationDesc:"Emerera sisitemu kugenzura pompe hakurikijwe ubutaka.",simulation:"Demo simulation",simulationDesc:"Hindura ibipimo by'igerageza kugira ngo ugerageze dashboard.",simulateDry:"Gerageza ubutaka bwumye",simulateWet:"Gerageza ubutaka bufite amazi ahagije",settingsNote:"Igenamiterere ribikwa muri browser yawe. Nta sensor cyangwa pompe bifatika bihujwe muri iyi version.",footerNote:"Ubuhinzi bw'ikoranabuhanga • Kuhira byigenga",phone:"Phone & SMS",waterPage:"Gukurikirana amazi",waterPageDesc:"Amazi yakoreshejwe, asigaye n'amateka yo kuhira.",waterHistoryTitle:"Amateka y'amazi yo kuhira",waterHistoryDesc:"Buri gihe pompe ifunguye n'amazi yakoreshejwe.",phoneSmsTitle:"Telefoni na SMS",phoneSmsDesc:"Andikisha nimero ya telefoni uhitemo ubutumwa wifuza kwakira.",phoneRegistration:"Kwiyandikisha kuri telefoni",basicPhoneNote:"Telefoni isanzwe yakira SMS; ntukeneye smartphone.",mobileNumber:"Nimero ya telefoni",smsLanguageLabel:"Ururimi rwa SMS",smsConsentText:"Nemeye kwakira ubutumwa bwa GREENPULSE bujyanye no kuhira n'imiterere y'umurima.",savePhoneSettings:"Bika igenamiterere rya telefoni",smsSaved:"Igenamiterere rya SMS ryabitswe.",smsDisabled:"Wahagaritse kwakira SMS.",smsQueued:"Ubutumwa bwashyizwe muri SMS Log (ntibwoherejwe).",smsNoRecipients:"Nta bahinzi bemeye SMS bafite nimero.",waterModeAuto:"Automatic",waterModeManual:"Manual",waterHistoryEmpty:"Nta mateka yo kuhira arahari.",smsDry:"GREENPULSE: Ubutaka burumye. Igihe cyo kuhira kirageze.",smsStart:"GREENPULSE: Kuhira byatangiye.",smsEnd:"GREENPULSE: Kuhira birangiye. Wakoresheje ",smsRemaining:" L. Amazi asigaye muri tank: ",smsConsentYes:"Yemeye",smsConsentNo:"Ntiyemeye",smsTestLabel:"SMS ya test",smsBroadcastLabel:"Ubutumwa rusange" ,
    waterTracking:"Gukurikirana amazi yo kuhira",waterTrackingDesc:"Amazi yakoreshejwe n'ayasigaye muri tank",waterUsed:"Amazi yakoreshejwe",waterRemaining:"Amazi asigaye",tankCapacity:"Ubushobozi bwa tank",irrigationDuration:"Igihe cyo kuhira",irrigationStarted:"Byatangiye",flowRate:"Umuvuduko",waterEstimateNote:"Iyi ni demo ibara amazi hakurikijwe umuvuduko wa pompe wagenwe. Kugira ngo ubone litiro nyazo, hazakenerwa flow sensor.",tankSettings:"Igenamiterere rya tank y'amazi",tankSettingsDesc:"Shyiraho ubushobozi bwa tank, wongere amazi igihe yuzuye.",saveTankCapacity:"Bika ubushobozi",refillTank:"Ongera amazi (Fill)",tankRefillNote:"Kanda Fill nyuma yo kongera amazi muri tank. Ibi ni ibarura rya demo.",pumpEmpty:"Tank nta mazi ayisigayemo. Pompe yahagaze.",tankSaved:"Ubushobozi bwa tank bwabitswe.",tankRefilled:"Tank yongewemo amazi.",waterUsedDetail:"Amazi yakoreshejwe: ",waterRemainingDetail:"Amazi asigaye: ",irrigationStartDetail:"Kuhira byatangiye.",irrigationEndDetail:"Kuhira byarangiye. ",
    moistureAdviceDry:"Ubutaka burakenera amazi. Automatic mode ishobora gufungura pompe.",moistureAdviceGood:"Ububobere bw'ubutaka buri ku rugero rwiza.",modeAuto:"AUTO",modeManual:"MANUAL",pumpStarted:"Pompe yafunguwe (demo).",pumpStopped:"Pompe yazimijwe (demo).",manualRequired:"Hitamo Manual mbere yo kugenzura pompe.",thresholdSaved:"Urugero rwabitswe.",
    voiceTest:"Iyi ni GREENPULSE. Ubutumwa bw'ijwi burakora.",dryVoiceAlert:"Iburira. Ubutaka burumye. Sisitemu irimo gutangiza kuhira.",recoveredVoiceAlert:"Amakuru meza. Ububobere bw'ubutaka bwongeye kugera ku rugero rwiza. Kuhira birahagaze.",
    autoOn:"Automatic irrigation irafunguye.",autoOff:"Automatic irrigation yazimijwe.",dryAlert:"Ubutaka burumye. Kuhira birakenewe.",clearDone:"Amateka yasibwe.",eventReading:"Igipimo cya sensor",eventPumpOn:"Pompe yafunguwe",eventPumpOff:"Pompe yazimijwe",eventMode:"Uburyo bwahinduwe",eventThreshold:"Urugero rwahinduwe",detailsMoisture:"Ububobere bw'ubutaka: ",detailsMode:"Uburyo: ",alertDryTitle:"Ubutaka burumye",alertDryText:"Ububobere buri munsi y'urugero rwo kuhira.",alertNormalTitle:"Sisitemu imeze neza",alertNormalText:"Nta kibazo cyihutirwa cyagaragaye."
  },
  en: {
    tagline:"Smart farming technology",menu:"MENU",overview:"Overview",monitoring:"Monitoring",irrigation:"Irrigation",alerts:"Alerts",history:"History",settings:"Settings",
    localNote:"Irrigation decisions run locally on the device",farmer:"Farmer",prototype:"Prototype mode",farmSystem:"SMART FARMING TECHNOLOGY",demoConnected:"Demo running",
    welcomeTitle:"Welcome to your farm",welcomeText:"Monitor soil and air conditions and know when irrigation is needed.",todaySummary:"Current conditions",latestReadings:"Sensor readings (simulated data)",demoData:"DEMO DATA",
    temperature:"Temperature",airHumidity:"Air humidity",soilMoisture:"Soil moisture",pumpStatus:"Pump status",airTemperature:"Air temperature",relativeHumidity:"Relative humidity",dryStatus:"Soil is dry",wetStatus:"Soil moisture is sufficient",pumpOff:"Pump is off",pumpOn:"Pump is running",
    soilLevel:"Soil moisture level",soilLevelDesc:"Latest available reading",currentMoisture:"Current",dry:"Dry",good:"Good",wet:"Wet",quickIrrigation:"Quick irrigation",quickIrrigationDesc:"Choose irrigation mode",controlMode:"Control mode",automatic:"Automatic",manual:"Manual",turnPumpOn:"Turn pump on",turnPumpOff:"Turn pump off",safetyNote:"In AUTO mode, the pump turns on when soil moisture falls below your set threshold.",
    liveMonitoring:"Live monitoring",monitoringDesc:"Readings from greenhouse sensors.",sensorInfo:"Sensor information",sensorInfoDesc:"Components planned for the prototype",dhtDescription:"Measures air temperature and humidity",soilDescription:"Measures soil moisture",wifiDescription:"Provides Wi-Fi communication",planned:"Planned",
    irrigationControl:"Irrigation control",irrigationDesc:"Automatic or manual control of the water pump.",irrigationMode:"Irrigation mode",chooseMode:"Choose a suitable mode",autoDesc:"The system decides based on soil moisture.",manualDesc:"The farmer turns the pump on or off.",waterPump:"Water pump",pumpDesc:"Pump control (demo)",manualOnlyNote:"This button works only in Manual mode. AUTO uses the soil moisture reading.",irrigationThreshold:"Irrigation start threshold",thresholdDesc:"The pump starts when soil moisture falls below this value.",saveThreshold:"Save threshold",
    alertsTitle:"Messages and alerts",alertsDesc:"Messages to help you make decisions about your farm.",testVoice:"Test my voice",voiceTitle:"Your recorded voice alerts",voiceDesc:"GREENPULSE plays your own recordings made on your phone.",voiceUnavailable:"Recording not found. Check that the file is inside the voices folder.",
    historyTitle:"Reading history",historyDesc:"Events from this demo session.",clearHistory:"Clear history",time:"Time",event:"Event",details:"Details",
    settingsTitle:"Settings",settingsDesc:"Configure how GREENPULSE works.",language:"Language",languageDesc:"Choose your preferred language.",voiceAlerts:"Voice alerts",voiceAlertsDesc:"Play your recordings when an issue is detected.",autoIrrigation:"Automatic irrigation",autoIrrigationDesc:"Allow the system to control the pump using soil moisture.",simulation:"Demo simulation",simulationDesc:"Change simulated readings to test the dashboard.",simulateDry:"Simulate dry soil",simulateWet:"Simulate healthy soil",settingsNote:"Settings are saved in this browser. No physical sensor or pump is connected in this version.",footerNote:"Smart farming • Local-first irrigation",phone:"Phone & SMS",waterPage:"Water Tracking",waterPageDesc:"Water used, water remaining and irrigation history.",waterHistoryTitle:"Irrigation Water History",waterHistoryDesc:"Each pump session and the water consumed.",phoneSmsTitle:"Phone & SMS Service",phoneSmsDesc:"Register your phone number and choose which messages to receive.",phoneRegistration:"Farmer phone registration",basicPhoneNote:"A basic mobile phone can receive ordinary SMS; a smartphone is not required.",mobileNumber:"Mobile phone number",smsLanguageLabel:"SMS language",smsConsentText:"I agree to receive GREENPULSE SMS alerts about irrigation and farm conditions.",savePhoneSettings:"Save phone settings",smsSaved:"SMS preferences saved.",smsDisabled:"You have opted out of SMS alerts.",smsQueued:"Message added to SMS Log (not sent).",smsNoRecipients:"No farmers with phone numbers have consented to SMS.",waterModeAuto:"Automatic",waterModeManual:"Manual",waterHistoryEmpty:"No irrigation water history yet.",smsDry:"GREENPULSE: Soil is dry. Irrigation is needed.",smsStart:"GREENPULSE: Irrigation has started.",smsEnd:"GREENPULSE: Irrigation completed. Water used: ",smsRemaining:" L. Water remaining in tank: ",smsConsentYes:"Consented",smsConsentNo:"Not consented",smsTestLabel:"Test SMS",smsBroadcastLabel:"Broadcast SMS",
    waterTracking:"Water usage tracking",waterTrackingDesc:"Water used and water remaining in the tank",waterUsed:"Water used",waterRemaining:"Water remaining",tankCapacity:"Tank capacity",irrigationDuration:"Irrigation duration",irrigationStarted:"Started",flowRate:"Flow rate",waterEstimateNote:"This demo estimates water from the configured pump flow rate. A flow sensor is required to measure actual litres.",tankSettings:"Water tank settings",tankSettingsDesc:"Set tank capacity and refill it when you add water.",saveTankCapacity:"Save capacity",refillTank:"Refill tank",tankRefillNote:"Press Refill after physically adding water to the tank. This is a demo counter.",pumpEmpty:"The tank is empty. The pump has stopped.",tankSaved:"Tank capacity saved.",tankRefilled:"Tank refilled.",waterUsedDetail:"Water used: ",waterRemainingDetail:"Water remaining: ",irrigationStartDetail:"Irrigation started.",irrigationEndDetail:"Irrigation completed. ",
    moistureAdviceDry:"Soil needs water. Automatic mode may turn on the pump.",moistureAdviceGood:"Soil moisture is within a good range.",modeAuto:"AUTO",modeManual:"MANUAL",pumpStarted:"Pump switched on (demo).",pumpStopped:"Pump switched off (demo).",manualRequired:"Select Manual before controlling the pump.",thresholdSaved:"Threshold saved.",
    voiceTest:"This is GREENPULSE. Your voice alerts are working.",dryVoiceAlert:"Warning. The soil is dry. The system is starting irrigation.",recoveredVoiceAlert:"Good news. Soil moisture has returned to the required level. Irrigation has stopped.",
    autoOn:"Automatic irrigation enabled.",autoOff:"Automatic irrigation disabled.",dryAlert:"Soil is dry. Irrigation is needed.",clearDone:"History cleared.",eventReading:"Sensor reading",eventPumpOn:"Pump turned on",eventPumpOff:"Pump switched off",eventMode:"Mode changed",eventThreshold:"Threshold changed",detailsMoisture:"Soil moisture: ",detailsMode:"Mode: ",alertDryTitle:"Soil is dry",alertDryText:"Moisture is below the irrigation threshold.",alertNormalTitle:"System looks good",alertNormalText:"No urgent issue detected."
  }
};

const voiceFiles = {
  rw: { test:"voices/rw_test.mp3", dry:"voices/dry.mp3", recovered:"voices/wet.mp3" },
  en: { test:"voices/rw_test.mp3", dry:"voices/dry.mp3", recovered:"voices/wet.mp3" }
};

const state = {
  lang:localStorage.getItem("gp-language") || "rw",
  moisture:42,temp:25.4,humidity:60,
  threshold:Number(localStorage.getItem("gp-threshold") || 30),
  mode:"auto",pump:false,
  voice:localStorage.getItem("gp-voice-enabled") !== "false",
  autoEnabled:true,history:[],lastDryCondition:null,
  tankCapacity:Number(localStorage.getItem("gp-tank-capacity") || 100),
  tankRemaining:Number(localStorage.getItem("gp-tank-remaining") || 100),
  waterUsed:Number(localStorage.getItem("gp-water-used") || 0),
  waterHistory:JSON.parse(localStorage.getItem("gp-water-history") || "[]"),
  flowRate:Number(localStorage.getItem("gp-flow-rate") || 5),irrigationStartedAt:null,irrigationSessionUsed:0,lastWaterTick:Date.now(),
  audioUnlocked:false,pendingVoice:null,currentAudio:null
};

const $ = id => document.getElementById(id);
const t = key => (translations[state.lang] || translations.rw)[key] || key;

function toast(message) {
  const el=$("toast"); if(!el) return;
  el.textContent=message; el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer=setTimeout(()=>el.classList.remove("show"),2600);
}

function addHistory(event,details) {
  state.history.unshift({time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),event,details});
  renderHistory();
}

function renderHistory() {
  const rows=$("historyRows"); if(!rows) return;
  rows.replaceChildren();
  if(!state.history.length) {
    const tr=document.createElement("tr"),td=document.createElement("td");
    td.colSpan=3; td.textContent=state.lang==="rw"?"Nta mateka arahari.":"No history yet.";
    tr.appendChild(td); rows.appendChild(tr); return;
  }
  state.history.forEach(item=>{
    const tr=document.createElement("tr");
    [item.time,item.event,item.details].forEach(value=>{
      const td=document.createElement("td"); td.textContent=value; tr.appendChild(td);
    });
    rows.appendChild(tr);
  });
}

function saveWaterState() {
  localStorage.setItem("gp-tank-capacity",String(state.tankCapacity));
  localStorage.setItem("gp-tank-remaining",String(state.tankRemaining));
  localStorage.setItem("gp-water-used",String(state.waterUsed));
  localStorage.setItem("gp-water-history",JSON.stringify(state.waterHistory));
}

const SMS_LOG_KEY="gp-sms-log-v1";
function getSmsLog(){try{return JSON.parse(localStorage.getItem(SMS_LOG_KEY)||"[]");}catch(error){return [];}}
function saveSmsLog(log){localStorage.setItem(SMS_LOG_KEY,JSON.stringify(log.slice(0,250)));}
function queueSms(phone,message,recipient="Farmer",category="Alert"){
  if(!phone)return false;
  const log=getSmsLog();
  log.unshift({id:"sms-"+Date.now()+"-"+Math.random().toString(36).slice(2,7),time:new Date().toLocaleString(),recipient,phone,message,category,status:"SIMULATED — NOT SENT"});
  saveSmsLog(log);renderSmsLog();return true;
}
function queueConsentSms(messageForUser,category="Alert"){
  const farmers=getUsers().filter(user=>user.role==="Farmer"&&user.phone&&user.smsConsent===true);
  farmers.forEach(user=>queueSms(user.phone,messageForUser(user),user.name,category));
  return farmers.length;
}
function renderSmsLog(){
  const rows=$("smsLogRows");if(!rows)return;
  rows.replaceChildren();const log=getSmsLog();
  if(!log.length){const tr=document.createElement("tr"),td=document.createElement("td");td.colSpan=5;td.textContent="No SMS messages recorded yet.";tr.appendChild(td);rows.appendChild(tr);return;}
  log.forEach(item=>{const tr=document.createElement("tr");[item.time,item.recipient,item.phone,item.message,item.status].forEach(value=>{const td=document.createElement("td");td.textContent=value;tr.appendChild(td);});rows.appendChild(tr);});
}
function fillPhoneSettings(){
  if(!currentUser)return;
  const user=getUsers().find(item=>item.email===currentUser.email);if(!user)return;
  if($("farmerPhone"))$("farmerPhone").value=user.phone||"";
  if($("smsLanguage"))$("smsLanguage").value=user.smsLanguage||"rw";
  if($("smsOptIn"))$("smsOptIn").checked=!!user.smsConsent;
  if($("accountPhone"))$("accountPhone").textContent=user.phone||"Not added";
}
function renderWaterHistory(){
  const rows=$("waterHistoryRows");if(!rows)return;
  const used=$("waterPageUsed"),remaining=$("waterPageRemaining"),duration=$("waterPageDuration");
  if(used)used.textContent=state.waterUsed.toFixed(1);
  if(remaining)remaining.textContent=state.tankRemaining.toFixed(1);
  if(duration)duration.textContent=state.irrigationStartedAt?formatDuration((Date.now()-state.irrigationStartedAt)/1000):"00:00";
  rows.replaceChildren();
  if(!state.waterHistory.length){const tr=document.createElement("tr"),td=document.createElement("td");td.colSpan=5;td.textContent=t("waterHistoryEmpty");tr.appendChild(td);rows.appendChild(tr);return;}
  state.waterHistory.forEach(item=>{const tr=document.createElement("tr");[item.time,item.duration,item.used.toFixed(1)+" L",item.remaining.toFixed(1)+" L",item.mode].forEach(value=>{const td=document.createElement("td");td.textContent=value;tr.appendChild(td);});rows.appendChild(tr);});
}

function formatDuration(seconds) {
  const total=Math.max(0,Math.floor(seconds));
  const hours=Math.floor(total/3600),minutes=Math.floor((total%3600)/60),secs=total%60;
  return hours>0?`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(secs).padStart(2,"0")}`:`${String(minutes).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
}

function setPumpState(on,source="Manual") {
  if(on && state.tankRemaining<=0) {state.pump=false;toast(t("pumpEmpty"));render();return;}
  if(on===state.pump) return;
  const now=Date.now();
  if(on) {
    state.pump=true;state.irrigationStartedAt=now;state.irrigationSessionUsed=0;state.lastWaterTick=now;
    addHistory(t("eventPumpOn"),`${source} • ${t("irrigationStartDetail")} ${new Date(now).toLocaleTimeString()}`);
    queueConsentSms(user=>user.smsLanguage==="rw"?"GREENPULSE: Kuhira byatangiye.":"GREENPULSE: Irrigation has started.","Irrigation started");
  } else {
    state.pump=false;
    const duration=state.irrigationStartedAt?Math.round((now-state.irrigationStartedAt)/1000):0;
    const used=state.irrigationSessionUsed;
    const mode=source==="AUTO"?"Automatic":source==="Manual"?"Manual":source;
    state.waterHistory.unshift({time:new Date(now).toLocaleString(),duration:formatDuration(duration),used,remaining:state.tankRemaining,mode});
    state.waterHistory=state.waterHistory.slice(0,150);saveWaterState();
    addHistory(t("eventPumpOff"),`${source} • ${t("irrigationEndDetail")}${used.toFixed(1)} L; ${t("irrigationDuration")}: ${formatDuration(duration)}`);
    queueConsentSms(user=>user.smsLanguage==="rw"?`GREENPULSE: Kuhira birangiye. Wakoresheje ${used.toFixed(1)} L. Hasigaye ${state.tankRemaining.toFixed(1)} L muri tank.`:`GREENPULSE: Irrigation completed. Used ${used.toFixed(1)} L. ${state.tankRemaining.toFixed(1)} L remains in the tank.`,"Irrigation completed");
    state.irrigationStartedAt=null;
  }
  render();
}

function accountWaterUse() {
  const now=Date.now();
  if(state.pump) {
    const elapsed=Math.max(0,(now-state.lastWaterTick)/1000);
    const consumed=Math.min(state.tankRemaining,state.flowRate*elapsed/60);
    state.tankRemaining=Math.max(0,state.tankRemaining-consumed);
    state.waterUsed+=consumed;state.irrigationSessionUsed+=consumed;
    if(consumed>0) saveWaterState();
    if(state.tankRemaining<=0.0001) {
      state.tankRemaining=0;saveWaterState();setPumpState(false,"Tank empty");toast(t("pumpEmpty"));
    }
  }
  state.lastWaterTick=now;
  renderWaterTracking();
}

function renderWaterTracking() {
  const used=$("waterUsedValue"),remaining=$("waterRemainingValue"),capacity=$("waterCapacityValue");
  if(used) used.textContent=state.waterUsed.toFixed(1);
  if(remaining) remaining.textContent=state.tankRemaining.toFixed(1);
  if(capacity) capacity.textContent=state.tankCapacity.toFixed(0);
  const bar=$("tankLevelBar");if(bar) bar.style.width=(state.tankCapacity>0?Math.max(0,Math.min(100,state.tankRemaining/state.tankCapacity*100)):0)+"%";
  const status=$("irrigationLiveStatus");if(status){status.textContent=state.pump?(state.lang==="rw"?"KUHIRWA BIRAKOMEJE":"IRRIGATING"):(state.lang==="rw"?"POMPE IRAZIMYE":"PUMP OFF");status.classList.toggle("running",state.pump);}
  const duration=$("irrigationDurationValue");if(duration) duration.textContent=state.irrigationStartedAt?formatDuration((Date.now()-state.irrigationStartedAt)/1000):"00:00";
  const started=$("irrigationStartValue");if(started) started.textContent=state.irrigationStartedAt?new Date(state.irrigationStartedAt).toLocaleTimeString():"--";
  const flow=$("flowRateValue");if(flow) flow.textContent=state.flowRate.toFixed(1)+" L/min";
  renderWaterHistory();
  const tankInput=$("tankCapacityInput");if(tankInput && document.activeElement!==tankInput) tankInput.value=state.tankCapacity;
  const flowInput=$("flowRateInput");if(flowInput && document.activeElement!==flowInput) flowInput.value=state.flowRate;
}

function render() {
  document.documentElement.lang=state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[state.lang][key]) el.textContent=t(key);
  });
  if($("languageSelect")) $("languageSelect").value=state.lang;
  if($("settingsLanguage")) $("settingsLanguage").value=state.lang;
  if($("temperatureValue")) $("temperatureValue").textContent=state.temp.toFixed(1);
  if($("monitorTemp")) $("monitorTemp").textContent=state.temp.toFixed(1);
  if($("humidityValue")) $("humidityValue").textContent=state.humidity;
  if($("monitorHumidity")) $("monitorHumidity").textContent=state.humidity;
  if($("moistureValue")) $("moistureValue").textContent=state.moisture;
  if($("monitorMoisture")) $("monitorMoisture").textContent=state.moisture;
  if($("moisturePercent")) $("moisturePercent").textContent=state.moisture+"%";
  if($("moistureBar")) $("moistureBar").style.width=state.moisture+"%";
  if($("thresholdDisplay")) $("thresholdDisplay").textContent=state.threshold+"%";
  if($("thresholdSlider")) $("thresholdSlider").value=state.threshold;

  const dry=state.moisture<state.threshold;
  if($("moistureStatus")) $("moistureStatus").textContent=dry?t("dryStatus"):t("wetStatus");
  if($("moistureAdvice")) $("moistureAdvice").textContent=dry?t("moistureAdviceDry"):t("moistureAdviceGood");
  if($("pumpStatusValue")) {
    $("pumpStatusValue").textContent=state.pump?"ON":"OFF";
    $("pumpStatusValue").style.color=state.pump?"#1e8a5a":"#d18b38";
  }
  if($("pumpStatusFoot")) $("pumpStatusFoot").textContent=state.pump?t("pumpOn"):t("pumpOff");
  if($("pumpIndicator")) {
    $("pumpIndicator").textContent=state.pump?"ON":"OFF";
    $("pumpIndicator").classList.toggle("on",state.pump);
  }
  if($("pumpLarge")) $("pumpLarge").textContent=state.pump?"ON":"OFF";
  if($("pumpCaption")) $("pumpCaption").textContent=state.pump?t("pumpOn"):t("pumpOff");
  if($("pumpIcon")) $("pumpIcon").style.color=state.pump?"#1e9a61":"#8cb69b";
  if($("modeLabel")) $("modeLabel").textContent=state.mode==="auto"?t("modeAuto"):t("modeManual");
  if($("quickPump")) $("quickPump").querySelector("span").textContent=state.pump?t("turnPumpOff"):t("turnPumpOn");
  if($("pumpToggle")) $("pumpToggle").querySelector("span").textContent=state.pump?t("turnPumpOff"):t("turnPumpOn");
  if($("autoMode")) $("autoMode").classList.toggle("selected",state.mode==="auto");
  if($("manualMode")) $("manualMode").classList.toggle("selected",state.mode==="manual");
  if($("voiceEnabled")) $("voiceEnabled").checked=state.voice;
  if($("autoEnabled")) $("autoEnabled").checked=state.autoEnabled;
  if($("alertCount")) $("alertCount").textContent=dry?"1":"0";
  renderHistory(); renderAlerts(); renderWaterTracking();
}

function setLanguage(lang) {
  if(!translations[lang]) return;
  state.lang=lang; localStorage.setItem("gp-language",lang); render();
}

function setMode(mode) {
  state.mode=mode;
  if(mode==="auto" && !state.autoEnabled) {
    state.mode="manual"; toast(t("autoOff")); render(); return;
  }
  addHistory(t("eventMode"),t("detailsMode")+(mode==="auto"?"AUTO":"MANUAL"));
  if(mode==="auto") applyAutomation();
  render();
}

function playVoice(type) {
  if(!state.voice) return;
  const audioPath=voiceFiles[state.lang==="en"?"en":"rw"][type];
  if(!audioPath) {toast(t("voiceUnavailable"));return;}
  if(!state.audioUnlocked) {state.pendingVoice=type;return;}
  if(state.currentAudio) {state.currentAudio.pause();state.currentAudio.currentTime=0;}
  const audio=new Audio(audioPath); state.currentAudio=audio;
  audio.play().catch(error=>{console.error("GREENPULSE voice playback error:",error);toast(t("voiceUnavailable"));});
}

function unlockVoice() {
  state.audioUnlocked=true;
  if(state.pendingVoice) {
    const pending=state.pendingVoice; state.pendingVoice=null; playVoice(pending);
  }
}
window.addEventListener("pointerdown",unlockVoice,{once:true});
window.addEventListener("keydown",unlockVoice,{once:true});

function applyAutomation() {
  const isDry=state.moisture<state.threshold;
  if(state.lastDryCondition!==null && isDry!==state.lastDryCondition && state.voice) {
    playVoice(isDry?"dry":"recovered");
  }
  if(state.lastDryCondition!==null && isDry && !state.lastDryCondition) {
    queueConsentSms(user=>user.smsLanguage==="rw"?"GREENPULSE: Ubutaka bwumye. Igihe cyo kuhira kirageze.":"GREENPULSE: Soil is dry. Irrigation is needed.","Dry soil alert");
  }
  state.lastDryCondition=isDry;
  if(state.mode!=="auto" || !state.autoEnabled) return;
  const shouldRun=isDry && state.tankRemaining>0;
  if(shouldRun!==state.pump) setPumpState(shouldRun,"AUTO");
}

function togglePump() {
  if(state.mode!=="manual") {toast(t("manualRequired"));return;}
  setPumpState(!state.pump,"Manual");
  toast(state.pump?t("pumpStarted"):t("pumpStopped"));
}

function renderAlerts() {
  const alertList=$("alertList"); if(!alertList) return;
  const dry=state.moisture<state.threshold;
  const article=document.createElement("article"); article.className="alert-item";
  const icon=document.createElement("div"); icon.className="alert-icon";
  const iconEl=document.createElement("i"); iconEl.className="fa-solid "+(dry?"fa-triangle-exclamation":"fa-circle-check"); icon.appendChild(iconEl);
  const content=document.createElement("div");
  const title=document.createElement("strong"); title.textContent=dry?t("alertDryTitle"):t("alertNormalTitle");
  const paragraph=document.createElement("p"); paragraph.textContent=dry?t("alertDryText"):t("alertNormalText");
  const date=document.createElement("small"); date.textContent=new Date().toLocaleString();
  content.append(title,paragraph,date); article.append(icon,content); alertList.replaceChildren(article);
}

function switchPage(page,button) {
  if(page==="admin"&&currentUser?.role!=="Admin"){toast("Admin access only.");return;}
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const target=$("page-"+page); if(target) target.classList.add("active");
  document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  if($("pageTitle")) $("pageTitle").textContent=button?button.querySelector("span").textContent:t(page);
  if($("sidebar")) $("sidebar").classList.remove("open");
}

/* LOGIN / LOGOUT - frontend demo only */
const loginScreen=$("loginScreen");
const dashboardApp=$("dashboardApp");
const loginForm=$("loginForm");
const loginError=$("loginError");
const demoEmail="farmer@greenpulse.rw";
const demoPassword="GreenPulse123!";
const adminEmail="admin@greenpulse.rw";
const adminPassword="AdminGreen123!";
const USERS_KEY="gp-demo-users-v2";
const SESSION_KEY="gp-demo-current-user";
let currentUser=null;

function getUsers(){
  let users=[];
  try{users=JSON.parse(localStorage.getItem(USERS_KEY)||"[]");}catch(error){users=[];}
  if(!users.some(user=>user.email===demoEmail)) users.unshift({id:"demo-farmer",name:"GREENPULSE Farmer",email:demoEmail,password:demoPassword,role:"Farmer",joined:new Date().toISOString(),demo:true});
  if(!users.some(user=>user.email===adminEmail)) users.unshift({id:"demo-admin",name:"GREENPULSE Admin",email:adminEmail,password:adminPassword,role:"Admin",joined:new Date().toISOString(),demo:true});
  localStorage.setItem(USERS_KEY,JSON.stringify(users));
  return users;
}
function saveUsers(users){localStorage.setItem(USERS_KEY,JSON.stringify(users));}
function showAuthScreen(screen){
  [loginScreen,$("registerScreen"),$("forgotScreen")].forEach(el=>{if(el)el.hidden=el!==screen;});
  dashboardApp.hidden=true;
}
function setCurrentUser(user){
  currentUser={id:user.id,name:user.name,email:user.email,role:user.role};
  sessionStorage.setItem(SESSION_KEY,user.email);
  loginScreen.hidden=true;$('registerScreen').hidden=true;$('forgotScreen').hidden=true;dashboardApp.hidden=false;
  const nameEl=$("profileName"),roleEl=$("profileRole"),avatar=$("profileAvatar");
  if(nameEl)nameEl.textContent=user.name;
  if(roleEl)roleEl.textContent=user.role+" account";
  if(avatar)avatar.textContent=user.name.split(/\s+/).map(part=>part[0]).join("").slice(0,2).toUpperCase();
  document.querySelectorAll(".admin-only").forEach(el=>el.hidden=user.role!=="Admin");
  render();renderAdminUsers();renderAccount();fillPhoneSettings();renderSmsLog();
}
function renderAdminUsers(){
  const rows=$("adminUsersRows");if(!rows)return;
  const users=getUsers();
  $("adminTotalUsers").textContent=users.length;
  $("adminFarmerCount").textContent=users.filter(u=>u.role==="Farmer").length;
  $("adminCount").textContent=users.filter(u=>u.role==="Admin").length;
  rows.replaceChildren();
  users.forEach(user=>{
    const tr=document.createElement("tr");
    [user.name,user.email,user.phone||"—",user.smsConsent?"Consented":"Not consented",user.role,new Date(user.joined).toLocaleDateString()].forEach(value=>{const td=document.createElement("td");td.textContent=value;tr.appendChild(td);});
    const actions=document.createElement("td");
    const roleButton=document.createElement("button");roleButton.className="admin-action";roleButton.textContent=user.role==="Admin"?"Make Farmer":"Make Admin";roleButton.disabled=user.email===currentUser?.email;
    roleButton.addEventListener("click",()=>{
      if(!currentUser||currentUser.role!=="Admin")return;
      const list=getUsers();const target=list.find(u=>u.id===user.id);if(!target)return;
      target.role=target.role==="Admin"?"Farmer":"Admin";saveUsers(list);renderAdminUsers();toast("User role updated.");
    });
    const deleteButton=document.createElement("button");deleteButton.className="admin-action danger";deleteButton.textContent="Delete";deleteButton.disabled=user.demo||user.email===currentUser?.email;
    deleteButton.addEventListener("click",()=>{
      if(!currentUser||currentUser.role!=="Admin"||user.demo||user.email===currentUser.email)return;
      if(!confirm("Delete this demo user account?"))return;
      saveUsers(getUsers().filter(u=>u.id!==user.id));renderAdminUsers();toast("User account deleted.");
    });
    actions.append(roleButton,deleteButton);tr.appendChild(actions);rows.appendChild(tr);
  });
}
function renderAccount(){
  if(!currentUser)return;
  $("accountName").textContent=currentUser.name;$("accountEmail").textContent=currentUser.email;$("accountRole").textContent=currentUser.role;
  const user=getUsers().find(item=>item.email===currentUser.email);if($("accountPhone"))$("accountPhone").textContent=user?.phone||"Not added";
}
function finishLogout(){
  sessionStorage.removeItem(SESSION_KEY);localStorage.removeItem("gp-demo-auth");sessionStorage.removeItem("gp-demo-auth");currentUser=null;
  if(state.currentAudio){state.currentAudio.pause();state.currentAudio.currentTime=0;}
  $("loginPassword").value="";$("rememberMe").checked=false;loginError.textContent="";
  showAuthScreen(loginScreen);
}

function checkLoginStatus() {
  const email=sessionStorage.getItem(SESSION_KEY);
  const user=getUsers().find(item=>item.email===email);
  if(user)setCurrentUser(user);else showAuthScreen(loginScreen);
}

loginForm.addEventListener("submit",e=>{
  e.preventDefault();
  const email=$("loginEmail").value.trim().toLowerCase();
  const password=$("loginPassword").value;
  const user=getUsers().find(item=>item.email.toLowerCase()===email&&item.password===password);
  if(user){loginError.textContent="";setCurrentUser(user);toast("Welcome to GREENPULSE!");}
  else loginError.textContent="Incorrect email or password. Please try again.";
});

$("toggleLoginPassword").addEventListener("click",function(){
  const input=$("loginPassword"), icon=this.querySelector("i");
  const show=input.type==="password";
  input.type=show?"text":"password";
  icon.classList.toggle("fa-eye",!show);
  icon.classList.toggle("fa-eye-slash",show);
  this.setAttribute("aria-label",show?"Hide password":"Show password");
});

$("logoutButton").addEventListener("click",()=>{finishLogout();toast("You have logged out.");});

$("forgotPasswordLink").addEventListener("click",()=>{ $("resetError").textContent=""; showAuthScreen($("forgotScreen")); });
$("createAccountLink").addEventListener("click",()=>{ $("registerError").textContent=""; showAuthScreen($("registerScreen")); });
$("backToLoginFromRegister").addEventListener("click",()=>showAuthScreen(loginScreen));
$("backToLoginFromReset").addEventListener("click",()=>showAuthScreen(loginScreen));

$("registerForm").addEventListener("submit",e=>{
  e.preventDefault();const name=$("registerName").value.trim();const email=$("registerEmail").value.trim().toLowerCase();const password=$("registerPassword").value;const confirmPassword=$("registerConfirm").value;const phone=$("registerPhone")?$("registerPhone").value.trim():"";
  const error=$("registerError");
  if(password!==confirmPassword){error.textContent="Passwords do not match.";return;}
  const users=getUsers();if(users.some(user=>user.email.toLowerCase()===email)){error.textContent="An account with this email already exists.";return;}
  const user={id:"user-"+Date.now(),name,email,password,phone,smsLanguage:"rw",smsConsent:false,role:"Farmer",joined:new Date().toISOString(),demo:false};users.push(user);saveUsers(users);$("registerForm").reset();$("loginEmail").value=email;showAuthScreen(loginScreen);toast("Account created. Sign in with your new account.");
});

$("resetForm").addEventListener("submit",e=>{
  e.preventDefault();const email=$("resetEmail").value.trim().toLowerCase();const password=$("resetPassword").value;const confirmPassword=$("resetConfirm").value;const error=$("resetError");
  if(password!==confirmPassword){error.textContent="Passwords do not match.";return;}
  const users=getUsers();const user=users.find(item=>item.email.toLowerCase()===email);
  if(!user){error.textContent="No account was found with this email.";return;}
  user.password=password;saveUsers(users);$("resetForm").reset();$("loginEmail").value=email;showAuthScreen(loginScreen);toast("Password updated. Please sign in.");
});

$("changePasswordForm").addEventListener("submit",e=>{
  e.preventDefault();const error=$("changePasswordError");const users=getUsers();const user=users.find(item=>item.email===currentUser?.email);
  if(!user)return;
  if(user.password!==$("currentPassword").value){error.textContent="Current password is incorrect.";return;}
  if($("newPassword").value!==$("confirmNewPassword").value){error.textContent="New passwords do not match.";return;}
  user.password=$("newPassword").value;saveUsers(users);$("changePasswordForm").reset();error.textContent="";toast("Password updated.");
});


/* PHONE SETTINGS + SMS DEMO WORKFLOW */
$("phoneSettingsForm").addEventListener("submit",e=>{
  e.preventDefault();
  if(!currentUser||currentUser.role!=="Farmer"){toast("Only farmer accounts can update phone preferences.");return;}
  const phone=$("farmerPhone").value.trim();
  if(!/^\+?2507\d{8}$/.test(phone.replace(/[\s-]/g,""))){toast("Enter a valid Rwanda mobile number, e.g. +2507XXXXXXXX.");return;}
  const users=getUsers();const user=users.find(item=>item.email===currentUser.email);if(!user)return;
  user.phone=phone.replace(/[\s-]/g,"");user.smsLanguage=$("smsLanguage").value;user.smsConsent=$("smsOptIn").checked;saveUsers(users);
  fillPhoneSettings();renderAdminUsers();renderAccount();toast(user.smsConsent?t("smsSaved"):t("smsDisabled"));
});

$("adminSmsForm").addEventListener("submit",e=>{
  e.preventDefault();if(currentUser?.role!=="Admin"){toast("Admin access only.");return;}
  const phone=$("adminSmsPhone").value.trim().replace(/[\s-]/g,"");const message=$("adminSmsMessage").value.trim();
  if(!/^\+?[0-9]{9,15}$/.test(phone)||!message){toast("Enter a valid phone number and message.");return;}
  queueSms(phone,message,"Admin test recipient","Test SMS");$("adminSmsForm").reset();toast(t("smsQueued"));
});

$("sendSmsToFarmers").addEventListener("click",()=>{
  if(currentUser?.role!=="Admin"){toast("Admin access only.");return;}
  const message=$("adminSmsMessage").value.trim();
  if(!message){toast("Write the broadcast message in the message field first.");return;}
  const count=queueConsentSms(()=>message,"Admin broadcast");
  if(!count){toast(t("smsNoRecipients"));return;}
  $("adminSmsForm").reset();toast(`${count} ${t("smsQueued")}`);
});

/* EXISTING DASHBOARD EVENT LISTENERS */
document.querySelectorAll(".nav-link").forEach(button=>button.addEventListener("click",()=>switchPage(button.dataset.page,button)));
$("languageSelect").addEventListener("change",e=>setLanguage(e.target.value));
$("settingsLanguage").addEventListener("change",e=>setLanguage(e.target.value));
$("quickAuto").addEventListener("click",()=>setMode("auto"));
$("quickManual").addEventListener("click",()=>setMode("manual"));
$("autoMode").addEventListener("click",()=>setMode("auto"));
$("manualMode").addEventListener("click",()=>setMode("manual"));
$("quickPump").addEventListener("click",togglePump);
$("pumpToggle").addEventListener("click",togglePump);

$("thresholdSlider").addEventListener("input",e=>{$("thresholdDisplay").textContent=e.target.value+"%";});
$("saveThreshold").addEventListener("click",()=>{
  state.threshold=Number($("thresholdSlider").value);
  localStorage.setItem("gp-threshold",state.threshold);
  addHistory(t("eventThreshold"),state.threshold+"%");
  applyAutomation(); render(); toast(t("thresholdSaved"));
});

$("saveTankCapacity").addEventListener("click",()=>{
  const capacity=Number($("tankCapacityInput").value);
  const flow=Number($("flowRateInput").value);
  if(!Number.isFinite(capacity)||capacity<=0||capacity>100000){toast(state.lang==="rw"?"Shyiramo ubushobozi buri hejuru ya 0 L.":"Enter a tank capacity greater than 0 L.");return;}
  if(!Number.isFinite(flow)||flow<=0||flow>1000){toast(state.lang==="rw"?"Shyiramo umuvuduko uri hejuru ya 0 L/min.":"Enter a flow rate greater than 0 L/min.");return;}
  state.tankCapacity=capacity;state.flowRate=flow;
  state.tankRemaining=Math.min(capacity,state.tankRemaining);
  localStorage.setItem("gp-flow-rate",String(flow));saveWaterState();render();toast(t("tankSaved"));
});
$("refillTank").addEventListener("click",()=>{
  if(state.pump){toast(state.lang==="rw"?"Banza uzimye pompe mbere yo kongera amazi.":"Turn off the pump before refilling the tank.");return;}
  state.tankRemaining=state.tankCapacity;state.waterUsed=0;saveWaterState();render();toast(t("tankRefilled"));
  addHistory(state.lang==="rw"?"Tank yongewemo amazi":"Tank refilled",state.tankCapacity.toFixed(1)+" L");
});

$("voiceEnabled").addEventListener("change",e=>{
  state.voice=e.target.checked; localStorage.setItem("gp-voice-enabled",String(state.voice));
  if(!state.voice) {
    state.pendingVoice=null;
    if(state.currentAudio) {state.currentAudio.pause();state.currentAudio.currentTime=0;}
  }
});
$("testVoice").addEventListener("click",()=>playVoice("test"));

$("autoEnabled").addEventListener("change",e=>{
  state.autoEnabled=e.target.checked;
  if(!state.autoEnabled && state.mode==="auto") {state.mode="manual";setPumpState(false,"AUTO disabled");}
  else if(state.autoEnabled) {state.mode="auto";applyAutomation();}
  render(); toast(state.autoEnabled?t("autoOn"):t("autoOff"));
});

$("simulateDry").addEventListener("click",()=>{
  state.moisture=15; addHistory(t("eventReading"),t("detailsMoisture")+"15%");
  applyAutomation(); render(); toast(t("dryAlert"));
});
$("simulateWet").addEventListener("click",()=>{
  state.moisture=42; addHistory(t("eventReading"),t("detailsMoisture")+"42%");
  applyAutomation(); render(); toast(t("moistureAdviceGood"));
});
$("clearHistory").addEventListener("click",()=>{state.history=[];renderHistory();toast(t("clearDone"));});
$("menuToggle").addEventListener("click",()=>$("sidebar").classList.toggle("open"));

/* Initial state: login first, dashboard only after demo sign-in */
setInterval(accountWaterUse,1000);

document.addEventListener("DOMContentLoaded",()=>{
  render();
  state.lastDryCondition=state.moisture<state.threshold;
  checkLoginStatus();
});
