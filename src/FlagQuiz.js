import React, { useState, useEffect } from 'react';
import './FlagQuiz.css';

// Example JSON data (use your full JSON)
const flagData = {
    "flags": [
      { "url": "https://flagpedia.net/data/flags/h80/af.webp?v=un", "name": "Afghanistan" },
      { "url": "https://flagpedia.net/data/flags/h80/al.webp", "name": "Albania" },
      { "url": "https://flagpedia.net/data/flags/h80/dz.webp", "name": "Algeria" },
      { "url": "https://flagpedia.net/data/flags/h80/us.webp", "name": "United States" },
      { "url": "https://flagpedia.net/data/flags/h80/ax.webp", "name": "Åland Islands" },
      { "url": "https://flagpedia.net/data/flags/h80/as.webp", "name": "American Samoa" },
      { "url": "https://flagpedia.net/data/flags/h80/ad.webp", "name": "Andorra" },
      { "url": "https://flagpedia.net/data/flags/h80/ao.webp", "name": "Angola" },
      { "url": "https://flagpedia.net/data/flags/h80/ai.webp", "name": "Anguilla" },
      { "url": "https://flagpedia.net/data/flags/h80/aq.webp", "name": "Antarctica" },
      { "url": "https://flagpedia.net/data/flags/h80/ag.webp", "name": "Antigua and Barbuda" },
      { "url": "https://flagpedia.net/data/flags/h80/ar.webp", "name": "Argentina" },
      { "url": "https://flagpedia.net/data/flags/h80/am.webp", "name": "Armenia" },
      { "url": "https://flagpedia.net/data/flags/h80/aw.webp", "name": "Aruba" },
      { "url": "https://flagpedia.net/data/flags/h80/au.webp", "name": "Australia" },
      { "url": "https://flagpedia.net/data/flags/h80/at.webp", "name": "Austria" },
      { "url": "https://flagpedia.net/data/flags/h80/az.webp", "name": "Azerbaijan" },
      { "url": "https://flagpedia.net/data/flags/h80/bs.webp", "name": "Bahamas" },
      { "url": "https://flagpedia.net/data/flags/h80/bh.webp", "name": "Bahrain" },
      { "url": "https://flagpedia.net/data/flags/h80/bd.webp", "name": "Bangladesh" },
      { "url": "https://flagpedia.net/data/flags/h80/bb.webp", "name": "Barbados" },
      { "url": "https://flagpedia.net/data/flags/h80/by.webp", "name": "Belarus" },
      { "url": "https://flagpedia.net/data/flags/h80/be.webp", "name": "Belgium" },
      { "url": "https://flagpedia.net/data/flags/h80/bz.webp", "name": "Belize" },
      { "url": "https://flagpedia.net/data/flags/h80/bj.webp", "name": "Benin" },
      { "url": "https://flagpedia.net/data/flags/h80/bm.webp", "name": "Bermuda" },
      { "url": "https://flagpedia.net/data/flags/h80/bt.webp", "name": "Bhutan" },
      { "url": "https://flagpedia.net/data/flags/h80/bo.webp", "name": "Bolivia" },
      { "url": "https://flagpedia.net/data/flags/h80/ba.webp", "name": "Bosnia and Herzegovina" },
      { "url": "https://flagpedia.net/data/flags/h80/bw.webp", "name": "Botswana" },
      { "url": "https://flagpedia.net/data/flags/h80/br.webp", "name": "Brazil" },
      { "url": "https://flagpedia.net/data/flags/h80/bn.webp", "name": "Brunei" },
      { "url": "https://flagpedia.net/data/flags/h80/bg.webp", "name": "Bulgaria" },
      { "url": "https://flagpedia.net/data/flags/h80/bf.webp", "name": "Burkina Faso" },
      { "url": "https://flagpedia.net/data/flags/h80/bi.webp", "name": "Burundi" },
      { "url": "https://flagpedia.net/data/flags/h80/kh.webp", "name": "Cambodia" },
      { "url": "https://flagpedia.net/data/flags/h80/cm.webp", "name": "Cameroon" },
      { "url": "https://flagpedia.net/data/flags/h80/ca.webp", "name": "Canada" },
      { "url": "https://flagpedia.net/data/flags/h80/cv.webp", "name": "Cape Verde" },
      { "url": "https://flagpedia.net/data/flags/h80/cf.webp", "name": "Central African Republic" },
      { "url": "https://flagpedia.net/data/flags/h80/td.webp", "name": "Chad" },
      { "url": "https://flagpedia.net/data/flags/h80/cl.webp", "name": "Chile" },
      { "url": "https://flagpedia.net/data/flags/h80/cn.webp", "name": "China" },
      { "url": "https://flagpedia.net/data/flags/h80/co.webp", "name": "Colombia" },
      { "url": "https://flagpedia.net/data/flags/h80/km.webp", "name": "Comoros" },
      { "url": "https://flagpedia.net/data/flags/h80/cg.webp", "name": "Congo" },
      { "url": "https://flagpedia.net/data/flags/h80/cr.webp", "name": "Costa Rica" },
      { "url": "https://flagpedia.net/data/flags/h80/hr.webp", "name": "Croatia" },
      { "url": "https://flagpedia.net/data/flags/h80/cu.webp", "name": "Cuba" },
      { "url": "https://flagpedia.net/data/flags/h80/cy.webp", "name": "Cyprus" },
      { "url": "https://flagpedia.net/data/flags/h80/cz.webp", "name": "Czech Republic" },
      { "url": "https://flagpedia.net/data/flags/h80/dk.webp", "name": "Denmark" },
      { "url": "https://flagpedia.net/data/flags/h80/dj.webp", "name": "Djibouti" },
      { "url": "https://flagpedia.net/data/flags/h80/dm.webp", "name": "Dominica" },
      { "url": "https://flagpedia.net/data/flags/h80/do.webp", "name": "Dominican Republic" },
      { "url": "https://flagpedia.net/data/flags/h80/ec.webp", "name": "Ecuador" },
      { "url": "https://flagpedia.net/data/flags/h80/eg.webp", "name": "Egypt" },
      { "url": "https://flagpedia.net/data/flags/h80/sv.webp", "name": "El Salvador" },
      { "url": "https://flagpedia.net/data/flags/h80/er.webp", "name": "Eritrea" },
      { "url": "https://flagpedia.net/data/flags/h80/ee.webp", "name": "Estonia" },
      { "url": "https://flagpedia.net/data/flags/h80/sz.webp", "name": "Eswatini" },
      { "url": "https://flagpedia.net/data/flags/h80/et.webp", "name": "Ethiopia" },
      { "url": "https://flagpedia.net/data/flags/h80/fj.webp", "name": "Fiji" },
      { "url": "https://flagpedia.net/data/flags/h80/fi.webp", "name": "Finland" },
      { "url": "https://flagpedia.net/data/flags/h80/fr.webp", "name": "France" },
      { "url": "https://flagpedia.net/data/flags/h80/ga.webp", "name": "Gabon" },
      { "url": "https://flagpedia.net/data/flags/h80/gm.webp", "name": "Gambia" },
      { "url": "https://flagpedia.net/data/flags/h80/ge.webp", "name": "Georgia" },
      { "url": "https://flagpedia.net/data/flags/h80/de.webp", "name": "Germany" },
      { "url": "https://flagpedia.net/data/flags/h80/gh.webp", "name": "Ghana" },
      { "url": "https://flagpedia.net/data/flags/h80/gr.webp", "name": "Greece" },
      { "url": "https://flagpedia.net/data/flags/h80/gl.webp", "name": "Greenland" },
      { "url": "https://flagpedia.net/data/flags/h80/gd.webp", "name": "Grenada" },
      { "url": "https://flagpedia.net/data/flags/h80/gt.webp", "name": "Guatemala" },
      { "url": "https://flagpedia.net/data/flags/h80/gn.webp", "name": "Guinea" },
      { "url": "https://flagpedia.net/data/flags/h80/gw.webp", "name": "Guinea-Bissau" },
      { "url": "https://flagpedia.net/data/flags/h80/gy.webp", "name": "Guyana" },
      { "url": "https://flagpedia.net/data/flags/h80/ht.webp", "name": "Haiti" },
      { "url": "https://flagpedia.net/data/flags/h80/hn.webp", "name": "Honduras" },
      { "url": "https://flagpedia.net/data/flags/h80/hk.webp", "name": "Hong Kong" },
      { "url": "https://flagpedia.net/data/flags/h80/hu.webp", "name": "Hungary" },
      { "url": "https://flagpedia.net/data/flags/h80/is.webp", "name": "Iceland" },
      { "url": "https://flagpedia.net/data/flags/h80/in.webp", "name": "India" },
      { "url": "https://flagpedia.net/data/flags/h80/id.webp", "name": "Indonesia" },
      { "url": "https://flagpedia.net/data/flags/h80/ir.webp", "name": "Iran" },
      { "url": "https://flagpedia.net/data/flags/h80/iq.webp", "name": "Iraq" },
      { "url": "https://flagpedia.net/data/flags/h80/ie.webp", "name": "Ireland" },
      { "url": "https://flagpedia.net/data/flags/h80/il.webp", "name": "Israel" },
      { "url": "https://flagpedia.net/data/flags/h80/it.webp", "name": "Italy" },
      { "url": "https://flagpedia.net/data/flags/h80/jm.webp", "name": "Jamaica" },
      { "url": "https://flagpedia.net/data/flags/h80/jp.webp", "name": "Japan" },
      { "url": "https://flagpedia.net/data/flags/h80/jo.webp", "name": "Jordan" },
      { "url": "https://flagpedia.net/data/flags/h80/kz.webp", "name": "Kazakhstan" },
      { "url": "https://flagpedia.net/data/flags/h80/ke.webp", "name": "Kenya" },
      { "url": "https://flagpedia.net/data/flags/h80/ki.webp", "name": "Kiribati" },
      { "url": "https://flagpedia.net/data/flags/h80/xk.webp", "name": "Kosovo" },
      { "url": "https://flagpedia.net/data/flags/h80/kw.webp", "name": "Kuwait" },
      { "url": "https://flagpedia.net/data/flags/h80/kg.webp", "name": "Kyrgyzstan" },
      { "url": "https://flagpedia.net/data/flags/h80/la.webp", "name": "Laos" },
      { "url": "https://flagpedia.net/data/flags/h80/lv.webp", "name": "Latvia" },
      { "url": "https://flagpedia.net/data/flags/h80/lb.webp", "name": "Lebanon" },
      { "url": "https://flagpedia.net/data/flags/h80/ls.webp", "name": "Lesotho" },
      { "url": "https://flagpedia.net/data/flags/h80/lr.webp", "name": "Liberia" },
      { "url": "https://flagpedia.net/data/flags/h80/ly.webp", "name": "Libya" },
      { "url": "https://flagpedia.net/data/flags/h80/li.webp", "name": "Liechtenstein" },
      { "url": "https://flagpedia.net/data/flags/h80/lt.webp", "name": "Lithuania" },
      { "url": "https://flagpedia.net/data/flags/h80/lu.webp", "name": "Luxembourg" },
      { "url": "https://flagpedia.net/data/flags/h80/mo.webp", "name": "Macau" },
      { "url": "https://flagpedia.net/data/flags/h80/mk.webp", "name": "North Macedonia" },
      { "url": "https://flagpedia.net/data/flags/h80/mg.webp", "name": "Madagascar" },
      { "url": "https://flagpedia.net/data/flags/h80/mw.webp", "name": "Malawi" },
      { "url": "https://flagpedia.net/data/flags/h80/my.webp", "name": "Malaysia" },
      { "url": "https://flagpedia.net/data/flags/h80/mv.webp", "name": "Maldives" },
      { "url": "https://flagpedia.net/data/flags/h80/ml.webp", "name": "Mali" },
      { "url": "https://flagpedia.net/data/flags/h80/mt.webp", "name": "Malta" },
      { "url": "https://flagpedia.net/data/flags/h80/mh.webp", "name": "Marshall Islands" },
      { "url": "https://flagpedia.net/data/flags/h80/mq.webp", "name": "Martinique" },
      { "url": "https://flagpedia.net/data/flags/h80/mr.webp", "name": "Mauritania" },
      { "url": "https://flagpedia.net/data/flags/h80/mu.webp", "name": "Mauritius" },
      { "url": "https://flagpedia.net/data/flags/h80/yt.webp", "name": "Mayotte" },
      { "url": "https://flagpedia.net/data/flags/h80/mx.webp", "name": "Mexico" },
      { "url": "https://flagpedia.net/data/flags/h80/fm.webp", "name": "Micronesia" },
      { "url": "https://flagpedia.net/data/flags/h80/md.webp", "name": "Moldova" },
      { "url": "https://flagpedia.net/data/flags/h80/mc.webp", "name": "Monaco" },
      { "url": "https://flagpedia.net/data/flags/h80/mn.webp", "name": "Mongolia" },
      { "url": "https://flagpedia.net/data/flags/h80/me.webp", "name": "Montenegro" },
      { "url": "https://flagpedia.net/data/flags/h80/ms.webp", "name": "Montserrat" },
      { "url": "https://flagpedia.net/data/flags/h80/ma.webp", "name": "Morocco" },
      { "url": "https://flagpedia.net/data/flags/h80/mz.webp", "name": "Mozambique" },
      { "url": "https://flagpedia.net/data/flags/h80/mm.webp", "name": "Myanmar" },
      { "url": "https://flagpedia.net/data/flags/h80/na.webp", "name": "Namibia" },
      { "url": "https://flagpedia.net/data/flags/h80/nr.webp", "name": "Nauru" },
      { "url": "https://flagpedia.net/data/flags/h80/np.webp", "name": "Nepal" },
      { "url": "https://flagpedia.net/data/flags/h80/nl.webp", "name": "Netherlands" },
      { "url": "https://flagpedia.net/data/flags/h80/nc.webp", "name": "New Caledonia" },
      { "url": "https://flagpedia.net/data/flags/h80/nz.webp", "name": "New Zealand" },
      { "url": "https://flagpedia.net/data/flags/h80/ni.webp", "name": "Nicaragua" },
      { "url": "https://flagpedia.net/data/flags/h80/ne.webp", "name": "Niger" },
      { "url": "https://flagpedia.net/data/flags/h80/ng.webp", "name": "Nigeria" },
      { "url": "https://flagpedia.net/data/flags/h80/nu.webp", "name": "Niue" },
      { "url": "https://flagpedia.net/data/flags/h80/kp.webp", "name": "North Korea" },
      { "url": "https://flagpedia.net/data/flags/h80/mp.webp", "name": "Northern Mariana Islands" },
      { "url": "https://flagpedia.net/data/flags/h80/no.webp", "name": "Norway" },
      { "url": "https://flagpedia.net/data/flags/h80/om.webp", "name": "Oman" },
      { "url": "https://flagpedia.net/data/flags/h80/pk.webp", "name": "Pakistan" },
      { "url": "https://flagpedia.net/data/flags/h80/pw.webp", "name": "Palau" },
      { "url": "https://flagpedia.net/data/flags/h80/ps.webp", "name": "Palestine" },
      { "url": "https://flagpedia.net/data/flags/h80/pa.webp", "name": "Panama" },
      { "url": "https://flagpedia.net/data/flags/h80/pg.webp", "name": "Papua New Guinea" },
      { "url": "https://flagpedia.net/data/flags/h80/py.webp", "name": "Paraguay" },
      { "url": "https://flagpedia.net/data/flags/h80/pe.webp", "name": "Peru" },
      { "url": "https://flagpedia.net/data/flags/h80/ph.webp", "name": "Philippines" },
      { "url": "https://flagpedia.net/data/flags/h80/pl.webp", "name": "Poland" },
      { "url": "https://flagpedia.net/data/flags/h80/pt.webp", "name": "Portugal" },
      { "url": "https://flagpedia.net/data/flags/h80/qa.webp", "name": "Qatar" },
      { "url": "https://flagpedia.net/data/flags/h80/re.webp", "name": "Réunion" },
      { "url": "https://flagpedia.net/data/flags/h80/ro.webp", "name": "Romania" },
      { "url": "https://flagpedia.net/data/flags/h80/ru.webp", "name": "Russia" },
      { "url": "https://flagpedia.net/data/flags/h80/rw.webp", "name": "Rwanda" },
      { "url": "https://flagpedia.net/data/flags/h80/ws.webp", "name": "Samoa" },
      { "url": "https://flagpedia.net/data/flags/h80/sm.webp", "name": "San Marino" },
      { "url": "https://flagpedia.net/data/flags/h80/st.webp", "name": "São Tomé and Príncipe" },
      { "url": "https://flagpedia.net/data/flags/h80/sa.webp", "name": "Saudi Arabia" },
      { "url": "https://flagpedia.net/data/flags/h80/sn.webp", "name": "Senegal" },
      { "url": "https://flagpedia.net/data/flags/h80/rs.webp", "name": "Serbia" },
      { "url": "https://flagpedia.net/data/flags/h80/sc.webp", "name": "Seychelles" },
      { "url": "https://flagpedia.net/data/flags/h80/sl.webp", "name": "Sierra Leone" },
      { "url": "https://flagpedia.net/data/flags/h80/sg.webp", "name": "Singapore" },
      { "url": "https://flagpedia.net/data/flags/h80/sx.webp", "name": "Sint Maarten" },
      { "url": "https://flagpedia.net/data/flags/h80/sk.webp", "name": "Slovakia" },
      { "url": "https://flagpedia.net/data/flags/h80/si.webp", "name": "Slovenia" },
      { "url": "https://flagpedia.net/data/flags/h80/sb.webp", "name": "Solomon Islands" },
      { "url": "https://flagpedia.net/data/flags/h80/so.webp", "name": "Somalia" },
      { "url": "https://flagpedia.net/data/flags/h80/za.webp", "name": "South Africa" },
      { "url": "https://flagpedia.net/data/flags/h80/kr.webp", "name": "South Korea" },
      { "url": "https://flagpedia.net/data/flags/h80/ss.webp", "name": "South Sudan" },
      { "url": "https://flagpedia.net/data/flags/h80/es.webp", "name": "Spain" },
      { "url": "https://flagpedia.net/data/flags/h80/lk.webp", "name": "Sri Lanka" },
      { "url": "https://flagpedia.net/data/flags/h80/sd.webp", "name": "Sudan" },
      { "url": "https://flagpedia.net/data/flags/h80/sr.webp", "name": "Suriname" },
      { "url": "https://flagpedia.net/data/flags/h80/se.webp", "name": "Sweden" },
      { "url": "https://flagpedia.net/data/flags/h80/ch.webp", "name": "Switzerland" },
      { "url": "https://flagpedia.net/data/flags/h80/sy.webp", "name": "Syria" },
      { "url": "https://flagpedia.net/data/flags/h80/tw.webp", "name": "Taiwan" },
      { "url": "https://flagpedia.net/data/flags/h80/tj.webp", "name": "Tajikistan" },
      { "url": "https://flagpedia.net/data/flags/h80/tz.webp", "name": "Tanzania" },
      { "url": "https://flagpedia.net/data/flags/h80/th.webp", "name": "Thailand" },
      { "url": "https://flagpedia.net/data/flags/h80/tl.webp", "name": "Timor-Leste" },
      { "url": "https://flagpedia.net/data/flags/h80/tg.webp", "name": "Togo" },
      { "url": "https://flagpedia.net/data/flags/h80/to.webp", "name": "Tonga" },
      { "url": "https://flagpedia.net/data/flags/h80/tt.webp", "name": "Trinidad and Tobago" },
      { "url": "https://flagpedia.net/data/flags/h80/tn.webp", "name": "Tunisia" },
      { "url": "https://flagpedia.net/data/flags/h80/tr.webp", "name": "Turkey" },
      { "url": "https://flagpedia.net/data/flags/h80/tm.webp", "name": "Turkmenistan" },
      { "url": "https://flagpedia.net/data/flags/h80/tv.webp", "name": "Tuvalu" },
      { "url": "https://flagpedia.net/data/flags/h80/ug.webp", "name": "Uganda" },
      { "url": "https://flagpedia.net/data/flags/h80/ua.webp", "name": "Ukraine" },
      { "url": "https://flagpedia.net/data/flags/h80/ae.webp", "name": "United Arab Emirates" },
      { "url": "https://flagpedia.net/data/flags/h80/gb.webp", "name": "United Kingdom" },
      { "url": "https://flagpedia.net/data/flags/h80/us.webp", "name": "United States" },
      { "url": "https://flagpedia.net/data/flags/h80/uy.webp", "name": "Uruguay" },
      { "url": "https://flagpedia.net/data/flags/h80/uz.webp", "name": "Uzbekistan" },
      { "url": "https://flagpedia.net/data/flags/h80/vu.webp", "name": "Vanuatu" },
      { "url": "https://flagpedia.net/data/flags/h80/va.webp", "name": "Vatican City" },
      { "url": "https://flagpedia.net/data/flags/h80/ve.webp", "name": "Venezuela" },
      { "url": "https://flagpedia.net/data/flags/h80/vn.webp", "name": "Vietnam" },
      { "url": "https://flagpedia.net/data/flags/h80/eh.webp", "name": "Western Sahara" },
      { "url": "https://flagpedia.net/data/flags/h80/ye.webp", "name": "Yemen" },
      { "url": "https://flagpedia.net/data/flags/h80/zm.webp", "name": "Zambia" },
      { "url": "https://flagpedia.net/data/flags/h80/zw.webp", "name": "Zimbabwe" }
    ]
  }
;






 // Import the CSS file

const FlagQuiz = () => {
  const [currentFlag, setCurrentFlag] = useState(null);
  const [options, setOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [tempResults, setTempResults] = useState([]);

  useEffect(() => {
    generateQuiz();
  }, []);

  const generateQuiz = () => {
    if (questionNumber > 0 && questionNumber % 5 === 0) {
      saveTempResults();
    }

    const randomFlagIndex = Math.floor(Math.random() * flagData.flags.length);
    const randomFlag = flagData.flags[randomFlagIndex];
    setCurrentFlag(randomFlag);

    const correctOption = randomFlag.name;
    const incorrectOptions = flagData.flags
      .filter(flag => flag.name !== correctOption)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(flag => flag.name);

    const allOptions = [...incorrectOptions, correctOption].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
    setCorrectOption(correctOption);
    setShowResult(false);
    setUserAnswer(null);
    setQuestionNumber(questionNumber + 1);
  };

  const handleOptionClick = (option) => {
    setUserAnswer(option);
    if (option === correctOption) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const saveTempResults = () => {
    const result = {
      questionNumber: questionNumber,
      score: score
    };
    setTempResults([...tempResults, result]);
    alert(`Results after ${questionNumber} questions: Your score is ${score}`);
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Flag Quiz</h1>
      <p className="score">Score: {score}</p>
      <p className="question-number">Question: {questionNumber}</p>
      {currentFlag && (
        <div className="quiz-content">
          <img className="flag-image" src={currentFlag.url} alt="Flag" />
          <div className="options-container">
            {options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleOptionClick(option)}
                disabled={showResult}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      {showResult && (
        <div className="result">
          <p>{userAnswer === correctOption ? "Correct!" : `Wrong! The correct answer is ${correctOption}.`}</p>
          <button className="next-button" onClick={generateQuiz}>Next</button>
        </div>
      )}
      {tempResults.length > 0 && (
        <div className="temp-results">
          <h2>Previous scores</h2>
          <ul>
            {tempResults.map((result, index) => (
              <li key={index}>
                After {result.questionNumber} questions: Score was {result.score}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FlagQuiz;
