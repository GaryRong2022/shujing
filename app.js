// 数字经济专硕考研测评 H5
// 包含：10题测评、5档画像、院校推荐、二维码引流

const QUESTIONS = [
  {
    id: 'q1',
    title: '你的本科院校层次是？',
    subtitle: '客观评估起点，不唯学历论',
    options: [
      { value: 4, label: '985 / 211 / 双一流', tags: ['基础扎实'] },
      { value: 3, label: '普通一本', tags: ['有竞争力'] },
      { value: 2, label: '二本 / 独立学院', tags: ['需更努力'] },
      { value: 1, label: '专升本 / 其他', tags: ['逆袭可行'] }
    ]
  },
  {
    id: 'q2',
    title: '本科专业与数字经济相关度？',
    subtitle: '跨考门槛不同，择校要看专业课',
    options: [
      { value: 4, label: '经济学 / 金融学 / 统计学', tags: ['高度相关'] },
      { value: 3, label: '计算机 / 数据科学 / 信息管理', tags: ['数字素养强'] },
      { value: 2, label: '管理学 / 其他商科', tags: ['部分相关'] },
      { value: 1, label: '文科 / 理工科跨度大', tags: ['跨考需准备'] }
    ]
  },
  {
    id: 'q3',
    title: '你的数学基础自评？',
    subtitle: '数字经济专硕大多考396，少数考数三',
    options: [
      { value: 4, label: '很强，数三也能hold住', tags: ['可选数三'] },
      { value: 3, label: '中等，396更稳', tags: ['396为主'] },
      { value: 2, label: '薄弱，需要扬长避短', tags: ['避开数三'] },
      { value: 1, label: '几乎零基础，从0开始', tags: ['396+早准备'] }
    ]
  },
  {
    id: 'q4',
    title: '英语水平怎么样？',
    subtitle: '英语二是必考科目，拉分明显',
    options: [
      { value: 4, label: '六级 500+ / 雅思6.5+', tags: ['优势科目'] },
      { value: 3, label: '六级通过 / 四级 500+', tags: ['正常水平'] },
      { value: 2, label: '四级飘过 / 备考中', tags: ['需要提升'] },
      { value: 1, label: '未过四级 / 基础弱', tags: ['重点突破'] }
    ]
  },
  {
    id: 'q5',
    title: '每天能投入多少有效备考时间？',
    subtitle: '时间决定复习深度，也决定上限',
    options: [
      { value: 4, label: '≥ 8小时', tags: ['全力冲刺'] },
      { value: 3, label: '5-7小时', tags: ['比较充裕'] },
      { value: 2, label: '3-4小时', tags: ['需要高效'] },
      { value: 1, label: '≤ 2小时 / 在职', tags: ['时间紧张'] }
    ]
  },
  {
    id: 'q6',
    title: '当前备考进度？',
    subtitle: '进度影响择校的冲稳保策略',
    options: [
      { value: 4, label: '一轮过完，开始刷题', tags: ['进度超前'] },
      { value: 3, label: '基础阶段，知识点熟悉中', tags: ['进度正常'] },
      { value: 2, label: '刚开始系统复习', tags: ['需要加速'] },
      { value: 1, label: '还没开始 / 摇摆中', tags: ['尽快启动'] }
    ]
  },
  {
    id: 'q7',
    title: '目标地区偏好？',
    subtitle: '数字经济专硕地域资源差异大',
    options: [
      { value: 4, label: '一线城市：北京 / 上海 / 广东', tags: ['竞争激烈'] },
      { value: 3, label: '新一线：江浙 / 湖北 / 川渝', tags: ['性价比高'] },
      { value: 2, label: '家乡省会 / 就近就业', tags: ['区域发展'] },
      { value: 1, label: '无所谓，能上岸就行', tags: ['全国可选'] }
    ]
  },
  {
    id: 'q8',
    title: '学费预算（每年）？',
    subtitle: '数字经济专硕学费差异较大',
    options: [
      { value: 4, label: '不限，更看重学校牌子', tags: ['预算充足'] },
      { value: 3, label: '5万以内/年', tags: ['中等预算'] },
      { value: 2, label: '2万以内/年', tags: ['经济型'] },
      { value: 1, label: '1万左右/年，越低越好', tags: ['低预算'] }
    ]
  },
  {
    id: 'q9',
    title: '学习方式选择？',
    subtitle: '部分院校同时招收全日制与非全日制',
    options: [
      { value: 4, label: '必须全日制，脱产读研', tags: ['全日制'] },
      { value: 3, label: '优先全日制，非全也能接受', tags: ['偏全日制'] },
      { value: 2, label: '在职，需要非全日制', tags: ['非全日制'] },
      { value: 1, label: '都可以，灵活安排', tags: ['不限'] }
    ]
  },
  {
    id: 'q10',
    title: '你的择校风险偏好？',
    subtitle: '最后一步，决定冲稳保策略',
    options: [
      { value: 5, label: '冲刺名校，接受二战风险', tags: ['高风险高回报'] },
      { value: 4, label: '偏进取，冲一冲好学校', tags: ['积极进取'] },
      { value: 3, label: '均衡型，冲稳结合', tags: ['理性选择'] },
      { value: 2, label: '保守型，优先上岸', tags: ['稳妥为主'] },
      { value: 1, label: '必须今年上岸，保稳第一', tags: ['低风险'] }
    ]
  }
];

const PROFILES = {
  S: {
    key: 'S',
    name: '冲刺名校型',
    shortDesc: '背景硬、准备足、目标高',
    desc: '你的基础条件和备考投入都具备冲击名校的潜质。建议优先考虑985/顶尖211的数字经济项目，这些学校平台好、就业认可度高，但竞争激烈，需要把专业课和396/数三都打磨到位。',
    icon: '🚀',
    color: '#ff6b6b',
    schoolFilter: (s) => s.level === '985' || (s.level === '211' && s.city_tier === '一线'),
    maxTuition: 999,
    minRisk: 4
  },
  A: {
    key: 'A',
    name: '进取优质型',
    shortDesc: '基础中上，敢拼好学校',
    desc: '你的条件不错，但不必死磕最顶尖院校。选择强势211、热门地区优质双非或双一流，性价比更高，上岸概率也更可控。',
    icon: '⛰️',
    color: '#4ecdc4',
    schoolFilter: (s) => s.level === '211' || s.level === '双一流' || (s.level === '双非' && s.city_tier === '一线'),
    maxTuition: 10,
    minRisk: 3
  },
  B: {
    key: 'B',
    name: '稳健上岸型',
    shortDesc: '求稳但不将就',
    desc: '你更适合选择区域认可度高的院校，避开最热门的红海，用扎实的复习换稳妥上岸。重点关注双一流、省属重点和区域强校。',
    icon: '🎯',
    color: '#45b7d1',
    schoolFilter: (s) => s.level === '双一流' || (s.level === '双非' && s.city_tier === '新一线') || s.level === '211',
    maxTuition: 5,
    minRisk: 2
  },
  C: {
    key: 'C',
    name: '保底稳妥型',
    shortDesc: '基础弱/时间紧，优先上岸',
    desc: '当前基础或时间有限，建议放低姿态，选择学费低、竞争相对温和的双非院校。先上岸再图强，数字经济专硕未来发展路径同样宽广。',
    icon: '🛡️',
    color: '#96ceb4',
    schoolFilter: (s) => s.level === '双非' && s.city_tier !== '一线',
    maxTuition: 2,
    minRisk: 1
  },
  D: {
    key: 'D',
    name: '在职灵活型',
    shortDesc: '不脱产，非全也认可',
    desc: '你需要兼顾工作和学习，非全日制数字经济专硕是更现实的选择。优先看本地有非全招生的院校，通勤成本、学费和上课方式都要纳入考量。',
    icon: '💼',
    color: '#feca57',
    schoolFilter: (s) => s.study_mode === '非全日制',
    maxTuition: 999,
    minRisk: 1
  }
};

// 状态
let currentStep = 0;
let answers = {};
let resultProfile = null;
let recommendedSchools = [];

// DOM 元素
const homeView = document.getElementById('home-view');
const quizView = document.getElementById('quiz-view');
const resultView = document.getElementById('result-view');
const questionContainer = document.getElementById('question-container');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// 初始化
function init() {
  bindEvents();
  renderShareQr();
}

function bindEvents() {
  document.getElementById('start-btn').addEventListener('click', startQuiz);
  document.getElementById('restart-btn').addEventListener('click', restartQuiz);
  document.getElementById('share-btn').addEventListener('click', shareResult);
  prevBtn.addEventListener('click', goPrev);
  nextBtn.addEventListener('click', goNext);
}

function renderShareQr() {
  // 首页展示一个二维码，扫码直接进入本页面
  const qrContainer = document.getElementById('home-qr');
  if (qrContainer && typeof QRCode !== 'undefined') {
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
      text: window.location.href,
      width: 140,
      height: 140,
      colorDark: '#1a5fb4',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  }
}

function startQuiz() {
  currentStep = 0;
  answers = {};
  resultProfile = null;
  recommendedSchools = [];
  homeView.classList.add('hidden');
  resultView.classList.add('hidden');
  quizView.classList.remove('hidden');
  renderQuestion();
}

function restartQuiz() {
  startQuiz();
}

function renderQuestion() {
  const q = QUESTIONS[currentStep];
  progressBar.style.width = `${((currentStep + 1) / QUESTIONS.length) * 100}%`;
  progressText.textContent = `${currentStep + 1} / ${QUESTIONS.length}`;

  const selected = answers[q.id];

  questionContainer.innerHTML = `
    <div class="question-card" data-idx="${currentStep}">
      <div class="question-tag">问题 ${currentStep + 1}</div>
      <h2 class="question-title">${q.title}</h2>
      <p class="question-subtitle">${q.subtitle}</p>
      <div class="options">
        ${q.options.map((opt, idx) => `
          <div class="option ${selected === opt.value ? 'selected' : ''}" data-value="${opt.value}" data-idx="${idx}">
            <div class="option-marker">${String.fromCharCode(65 + idx)}</div>
            <div class="option-body">
              <div class="option-label">${opt.label}</div>
              <div class="option-tags">${Array.isArray(opt.tags) ? opt.tags.map(t => `<span>${t}</span>`).join('') : `<span>${opt.tags}</span>`}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // 绑定选项点击
  questionContainer.querySelectorAll('.option').forEach(el => {
    el.addEventListener('click', () => {
      const val = parseInt(el.dataset.value);
      answers[q.id] = val;
      renderQuestion();
      if (currentStep < QUESTIONS.length - 1) {
        setTimeout(goNext, 250);
      }
    });
  });

  prevBtn.disabled = currentStep === 0;
  nextBtn.textContent = currentStep === QUESTIONS.length - 1 ? '查看结果' : '下一题';
  nextBtn.disabled = selected === undefined;
}

function goNext() {
  if (currentStep < QUESTIONS.length - 1) {
    currentStep++;
    renderQuestion();
  } else {
    if (answers['q10'] !== undefined) {
      showResult();
    }
  }
}

function goPrev() {
  if (currentStep > 0) {
    currentStep--;
    renderQuestion();
  }
}

function calculateResult() {
  // 提取答案
  const bg = answers.q1;      // 本科层次
  const major = answers.q2;   // 专业相关度
  const math = answers.q3;    // 数学
  const english = answers.q4; // 英语
  const hours = answers.q5;   // 每日时间
  const progress = answers.q6;// 进度
  const region = answers.q7;  // 地区偏好
  const budget = answers.q8;  // 学费预算
  const mode = answers.q9;    // 学习方式
  const risk = answers.q10;   // 风险偏好

  // 基础能力分（0-100）
  const abilityScore = (bg + major + math + english + hours + progress) / 24 * 100;

  // 确定画像
  let profileKey;
  if (mode === 2) {
    profileKey = 'D';
  } else if (risk >= 4 && abilityScore >= 75) {
    profileKey = 'S';
  } else if (risk >= 3 && abilityScore >= 60) {
    profileKey = 'A';
  } else if (risk >= 2 && abilityScore >= 45) {
    profileKey = 'B';
  } else {
    profileKey = 'C';
  }

  // 如果必须全日制但选了非全画像，调整
  if (mode === 4 && profileKey === 'D') profileKey = 'C';

  const profile = PROFILES[profileKey];

  // 筛选院校
  let candidates = SCHOOLS_DATA.filter(s => {
    // 学习方式匹配
    if (mode === 4 && s.study_mode !== '全日制') return false; // 必须全日制
    if (mode === 2 && s.study_mode !== '非全日制') return false; // 必须非全
    if (mode === 3 && s.study_mode !== '全日制') return false; // 优先全日制
    // 学费匹配
    if (budget === 3 && s.tuition_num && s.tuition_num > 5) return false;
    if (budget === 2 && s.tuition_num && s.tuition_num > 2) return false;
    if (budget === 1 && s.tuition_num && s.tuition_num > 1.5) return false;
    // 数学匹配：数学弱尽量避免数三
    if (math <= 2 && s.math_type === '数三') return false;
    return true;
  });

  // 画像过滤器（如果是D，已经过滤过非全）
  if (profileKey !== 'D') {
    candidates = candidates.filter(profile.schoolFilter);
  }

  // 计算匹配分
  candidates = candidates.map(s => {
    let score = 0;
    // 层次分
    const levelScore = { '985': 10, '211': 8, '双一流': 6, '双非': 4 };
    score += levelScore[s.level] || 4;
    // 地区偏好
    if (region === 4 && s.city_tier === '一线') score += 6;
    if (region === 3 && s.city_tier === '新一线') score += 6;
    if (region === 2 && s.province) score += 3; // 家乡笼统加分
    if (region === 1) score += 2;
    // 学费预算匹配
    if (budget >= 3) score += 3;
    // 数学匹配
    if (math >= 3 && s.math_type === '数三') score += 2;
    if (math <= 2 && s.math_type === '396') score += 3;
    // 学制：时间紧偏好2年
    if (hours <= 2 && s.duration <= 2) score += 2;
    // 风险匹配
    if (risk >= 4 && (s.level === '985' || s.level === '211')) score += 3;
    if (risk <= 2 && s.level === '双非') score += 3;
    return { ...s, matchScore: score };
  });

  // 排序
  candidates.sort((a, b) => b.matchScore - a.matchScore);

  // 去重：同一院校只保留匹配分最高的一条（避免全日制/非全日制或多学院重复出现）
  const seen = new Set();
  const topSchools = [];
  for (const s of candidates) {
    if (seen.has(s.school)) continue;
    seen.add(s.school);
    topSchools.push(s);
    if (topSchools.length >= 5) break;
  }

  return { profile, topSchools, abilityScore };
}

function showResult() {
  quizView.classList.add('hidden');
  resultView.classList.remove('hidden');

  const { profile, topSchools, abilityScore } = calculateResult();
  resultProfile = profile;
  recommendedSchools = topSchools;

  // 渲染画像
  document.getElementById('result-icon').textContent = profile.icon;
  document.getElementById('result-name').textContent = profile.name;
  document.getElementById('result-short').textContent = profile.shortDesc;
  document.getElementById('result-desc').textContent = profile.desc;
  document.getElementById('ability-score').textContent = Math.round(abilityScore);
  document.querySelector('.result-header').style.setProperty('--profile-color', profile.color);

  // 渲染院校列表
  const listEl = document.getElementById('schools-list');
  if (topSchools.length === 0) {
    listEl.innerHTML = '<div class="empty-tip">根据你的条件，暂时没有完美匹配的院校。建议放宽预算或地区限制，联系扶摇学长一对一分析。</div>';
  } else {
    listEl.innerHTML = topSchools.map((s, idx) => `
      <div class="school-card" style="animation-delay: ${idx * 100}ms">
        <div class="school-rank">${idx + 1}</div>
        <div class="school-body">
          <div class="school-header">
            <div class="school-name">${s.school}</div>
            <div class="school-tags">
              <span class="tag level-${s.level === '985' ? '985' : s.level === '211' ? '211' : 'normal'}">${s.level}</span>
              <span class="tag">${s.study_mode}</span>
              <span class="tag">${s.province}</span>
            </div>
          </div>
          <div class="school-info">
            <span><strong>学制：</strong>${s.duration}年</span>
            <span><strong>学费：</strong>${s.tuition || '待确认'}</span>
            <span><strong>数学：</strong>${s.math_type}</span>
          </div>
          <div class="school-subjects">
            <div><strong>科目2：</strong>${s.subjects.subject2 || '-'}</div>
            <div><strong>专业课：</strong>${s.subjects.subject3_4 || '-'}</div>
          </div>
          ${s.remark ? `<div class="school-remark">备注：${s.remark.replace(/\n/g, ' ')}</div>` : ''}
        </div>
      </div>
    `).join('');
  }

  // 生成结果页二维码（引流：本页面链接）
  const resultQr = document.getElementById('result-qr');
  resultQr.innerHTML = '';
  new QRCode(resultQr, {
    text: window.location.href,
    width: 120,
    height: 120,
    colorDark: '#1a5fb4',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.M
  });

  // 滚动到顶部
  window.scrollTo(0, 0);
}

function shareResult() {
  const text = `我测了【数字经济专硕考研择校测评】，结果是「${resultProfile ? resultProfile.name : ''}」，推荐院校：${recommendedSchools.map(s => s.school).join('、')}。快来测测你适合哪所院校！`;
  if (navigator.share) {
    navigator.share({
      title: '数字经济专硕考研择校测评',
      text: text,
      url: window.location.href
    }).catch(() => {});
  } else {
    // 复制到剪贴板
    const input = document.createElement('textarea');
    input.value = text + ' ' + window.location.href;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('分享文案已复制，快去粘贴分享吧！');
  }
}

// 启动
init();
