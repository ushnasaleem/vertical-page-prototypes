(() => {
  const root = document.getElementById('creator-engine-walkthrough');
  const shell = document.querySelector('.mi-shell');
  const find = id => shell.querySelector('#ce-' + id);
  const profiles = {
    bpo: {
      label:'BPO',
      definition:'BPO v2.1 · Leaders at finance-outsourcing providers headquartered in the US or Western Europe, with an indicative range of 500–5,000 staff.',
      trail:[
        ['Provider appearance','Found ScaleNorth’s Dani Sandler on The CFO Show. Role and finance-outsourcing work are public. Full company fit is unverified.','https://thecfoshowpodcast.com/podcasts/the-evolution-of-outsourced-finance-and-accounting'],
        ['Independent placement search','Searched for BPO operator publications, podcasts and sponsorship packages. Found Evostr’s newsletter and show, and Outsource Accelerator’s newsletter placement.','https://www.outsourceaccelerator.com/publisher/'],
        ['Speaker expansion','Followed Amanda Quinn to Matchboard’s Sydney BPO Exchange. Organizer reports 80 executives in the awards room. Its listed countries are outside Beam’s target geography, so keep it as a discovery source.','https://www.matchboard.com.au/bpo-leadership-awards-winners-announced/']
      ],
      topic:['Protecting delivery margins','Evostr covers how providers protect margins as they adopt AI. Outsource Accelerator covers automation and demand for outsourced finance. Use this as a topic to monitor and search for operators discussing invoice exceptions or collections. Growth in attention is unmeasured.','https://evostr.com/','https://www.outsourceaccelerator.com/articles/trending-bpo-outsource-services/'],
      placements:[
        {
          id:'evostr-news', name:'Amanda Quinn · Evostr', placement:'Newsletter', format:'written', audience:3, audienceLabel:'Provider-side readers',
          fit:'Evostr identifies BPO executives as readers of this newsletter. Finance services, company size and headquarters are unverified for those readers.',
          grades:[[2,'Provider margins and specialization recur. The reviewed samples give less detail on finance workflows.'],[4,'Editorial work repeatedly addresses mid-market outsourcing operators. The Matchboard agenda corroborates Quinn’s provider-facing work.'],[3,'Quinn is a named BPO analyst and show co-host.']],
          reach:'2,000+ BPO executive readers', reachGrade:2, reachDetail:'Publisher claim. Per-issue reach and measurement period are undisclosed.',
          source:'https://evostr.com/', supportingSource:'https://www.matchboard.com.au/event/bpo-exchange-2026/', supportingLabel:'Matchboard agenda', sample:'Why BPO discovery wins', sampleUrl:'https://evostr.com/resources',
          route:'Evostr business contact', routeUrl:'https://evostr.com/', owner:'Marketing · demo owner',
          pitch:'Hi Amanda, your piece on scoping BPO work before quoting made me think about how operators choose their first finance automation workflow. Would a short piece on invoice exceptions and collections be useful for your newsletter?',
          deliverable:'One newsletter feature with an operator example and a Beam link, subject to editorial approval.',
          next:'Ask for recent issue clicks and the share of readers at mid-market finance BPOs in the US or Western Europe.'
        },
        {
          id:'inside-outsourcing', name:'Outsource Accelerator', placement:'Inside Outsourcing insertion', format:'written', audience:2, audienceLabel:'Mixed providers and buyers',
          fit:'The publisher describes readers who run BPO, EOR and PEO providers alongside buyers of outsourcing. The target finance-provider share is unknown.',
          grades:[[2,'The newsletter has covered finance and accounting outsourcing alongside general industry news.'],[2,'The publication serves providers and purchasers across outsourcing categories.'],[3,'An established outsourcing publisher provides a clear editorial and placement sample.']],
          reach:'625,000 sends/month', reachGrade:2, reachDetail:'Publisher reports 12 insertions and about 27% opens. Unique people reached and edition-level delivery are unknown.',
          source:'https://www.outsourceaccelerator.com/publisher/', sample:'Inside Outsourcing issue sample', sampleUrl:'https://www.outsourceaccelerator.com/newsletter/the-outsourcing-week-in-review-tuesday-november-15-2022/',
          route:'Publisher inquiry', routeUrl:'https://www.outsourceaccelerator.com/publisher/', owner:'Partnerships · proposed',
          rate:'$1,999/month listed publicly. Confirm currency, scope and terms.',
          pitch:'Could you share audience and click benchmarks for the editions most read by mid-market finance BPO operators in the US or Western Europe? We’re assessing a placement about reducing invoice exceptions.',
          deliverable:'Sponsor block across 12 editions over one month, as listed in the publisher package.',
          next:'Ask for unique recipients, edition-level clicks and the target-provider breakdown before discussing spend.'
        },
        {
          id:'better-bpo', name:'Amanda Quinn & Milan Batinich', placement:'Build a Better BPO podcast', format:'audio', audience:1, audienceLabel:'Operator-focused editorial',
          fit:'The show addresses BPO operators and interviews them. Public pages describe guests and topics. Listener composition is unknown.',
          grades:[[2,'Specialization and AI are relevant to delivery margins. Finance-back-office workflow coverage is limited in the reviewed episodes.'],[3,'The show is expressly made for BPO operators.'],[3,'The hosts interview named operators about their decisions and experience.']],
          reach:'Downloads unknown', reachGrade:0, reachDetail:'No episode metric found. Evostr’s 2,000+ figure applies to its newsletter.',
          source:'https://evostr.com/insights', sample:'All In: Why Half-Measures on AI Are Costing BPOs', sampleUrl:'https://evostr.com/insights',
          route:'Evostr business contact', routeUrl:'https://evostr.com/', owner:'Marketing · demo owner',
          pitch:'Would a practical episode on deciding between collections and invoice processing give your operators a useful follow-up to the AI adoption discussion?',
          deliverable:'One interview with a trackable show-notes link, subject to producer agreement.',
          next:'Ask about 30-day downloads and listener employer mix for comparable episodes.'
        },
        {
          id:'cfo-show', name:'Melissa Howatson', placement:'The CFO Show podcast', format:'audio', audience:1, audienceLabel:'Provider guest',
          fit:'Dani Sandler appeared to discuss finance outsourcing. The episode also serves buyers of outsourcing. ScaleNorth reports 300+ staff, leaving the ICP size floor unverified.',
          grades:[[3,'The episode discusses finance outsourcing and accounting operations in detail.'],[1,'A provider executive appeared on a show aimed broadly at finance leaders.'],[3,'The episode features a named finance-outsourcing practitioner.']],
          reach:'Downloads unknown', reachGrade:0, reachDetail:'No episode metric found.',
          source:'https://scalenorth.com/', sample:'The Evolution of Outsourced Finance and Accounting', sampleUrl:'https://thecfoshowpodcast.com/podcasts/the-evolution-of-outsourced-finance-and-accounting',
          route:'Guest suggestion form', routeUrl:'https://thecfoshowpodcast.com/contact', owner:'Marketing · demo owner',
          pitch:'For a follow-up to your ScaleNorth episode, Beam can propose a guest on how providers pick a first finance workflow to automate and measure the impact on delivery margins.',
          deliverable:'One podcast interview and a show-notes link, subject to producer approval.',
          next:'Check whether listeners include provider-side decision-makers before prioritizing a guest pitch.'
        }
      ]
    },
    rpo: {
      label:'RPO',
      definition:'RPO & Staffing v2 · US and UK staffing and recruiting agencies with 20–500 employees that place people for clients. Healthcare and nurse staffing lead.',
      trail:[
        ['Buyer appearance','Found Access Healthcare founders Danielle Doyle and Diego Davis on The Conversing Nurse. The episode speaks primarily to clinicians, so keep it as a discovery lead.','https://www.buzzsprout.com/2022505/episodes/19552418-leading-with-heart-how-two-nurses-built-an-international-staffing-company-with-diego-davis-and-danielle-doyle'],
        ['Independent placement search','Searched for healthcare staffing agency leaders, staffing newsletters and UK recruitment podcasts. Found NALTO, ASA, StaffingHub and Hishem Azzouz.','https://mediakitpublic.multiview.com/NALTO'],
        ['Topic expansion','Searched credentialing and screening separately. Found StaffingHub’s David Folwell interviewing Eric Ly and NALTO’s agenda listing Vista Staffing operations lead Lynn Mitchell. Ly is a vendor commentator. Mitchell is an operator lead.','https://www.nalto.org/event/2026-nalto-fall-fly-in/']
      ],
      topic:['Healthcare staffing credentialing','StaffingHub’s Oct 30 episode and NALTO’s Fall Fly-In agenda independently cover credentialing. Follow David Folwell for coverage and Lynn Mitchell for an operator contribution. A measured increase over prior weeks has not been established.','https://staffinghub.com/the-staffing-show/an-hour-per-placement-fixing-healthcare-credentialing-with-eric-ly-of-karmacheck/','https://www.nalto.org/event/2026-nalto-fall-fly-in/'],
      placements:[
        {
          id:'nalto', name:'NALTO', placement:'News Brief newsletter', format:'written', audience:3, audienceLabel:'US agency decision-makers',
          fit:'The media kit describes owners, founders and senior managers at US locum-tenens agencies. These agencies place clinicians. Company size and the newsletter’s matched share are unknown. The niche is physician staffing.',
          grades:[[3,'Credentialing, CV intake and placement operations are documented industry concerns.'],[4,'The association serves staffing agencies, and its agency eligibility rules require direct physician placement.'],[3,'Agency operations leaders appear on the association’s programming.']],
          reach:'1,942 subscribers', reachGrade:2, reachDetail:'Media kit lists weekly distribution and 55% opens. Measurement period and placement clicks are undisclosed.',
          source:'https://mediakitpublic.multiview.com/NALTO', supportingSource:'https://www.nalto.org/members/prospective/', supportingLabel:'Agency eligibility', sample:'Credentialing best practices', sampleUrl:'https://www.nalto.org/about/credentialing-guidelines/',
          route:'Multiview newsletter advertising inquiry', routeUrl:'https://mediakitpublic.multiview.com/NALTO', owner:'Partnerships · proposed',
          pitch:'We’re exploring a News Brief placement on getting candidate CVs and documents ready for agency review faster. Can you share comparable issue clicks and the share of readers who are decision-makers at US staffing firms with 20–500 employees?',
          deliverable:'One News Brief placement, subject to availability and terms.',
          next:'Verify agency size and placement clicks. Treat physician staffing as a healthcare adjacency to the nurse wedge.'
        },
        {
          id:'asa', name:'American Staffing Association', placement:'Staffing Today newsletter', format:'written', audience:2, audienceLabel:'Broad staffing professionals',
          fit:'ASA reports a broad US staffing audience. Its purchasing-involvement figure covers publications and websites collectively. The newsletter’s agency size, role and healthcare share are unverified.',
          grades:[[2,'The newsletter covers staffing operations across many sectors.'],[3,'The US association serves recruiting and staffing firms, with wide sector coverage.'],[3,'The publisher produces staffing research, regulatory updates and practical events.']],
          reach:'40,000+ staffing professionals', reachGrade:2, reachDetail:'Publisher reach claim for the daily newsletter. Measurement window and placement-level clicks are undisclosed.',
          source:'https://americanstaffing.net/industry-solution-providers/advertise/', sample:'Staffing Today daily briefing', sampleUrl:'https://americanstaffing.net/asa-publications/staffing-today-newsletter/',
          route:'ASA advertising contact', routeUrl:'https://americanstaffing.net/industry-solution-providers/advertise/', owner:'Partnerships · proposed',
          pitch:'Can you share recent Staffing Today placement performance and any healthcare staffing audience breakdown? Beam is considering a practical feature on faster screening and cleaner handoffs.',
          deliverable:'One daily newsletter placement, subject to the publisher’s available package.',
          next:'Ask about healthcare segment options and evidence for audience role and employer type.'
        },
        {
          id:'staffinghub', name:'StaffingHub', placement:'Daily Insights newsletter', format:'written', audience:1, audienceLabel:'Staffing-operator editorial',
          fit:'Current coverage directly addresses agency workflows. The live signup page gives a count and does not break down today’s Daily Insights audience by role and agency size. The 2023 media kit is historical.',
          grades:[[4,'Recent samples cover staffing exceptions, screening and healthcare credentialing in depth.'],[3,'The publisher writes for staffing operators across specialties.'],[3,'The publisher cites a range of staffing practitioners, reporting and research.']],
          reach:'3,500+ subscribers', reachGrade:2, reachDetail:'Publisher signup claim for Daily Insights, which includes the Weekly. Per-issue clicks and current buyer mix are undisclosed.',
          source:'https://staffinghub.com/', sample:'Credentialing speed in healthcare staffing', sampleUrl:'https://staffinghub.com/operational-discipline-execution/seven-in-10-hospitals-want-to-rely-less-on-agencies-credentialing-speed-decides-who-keeps-the-orders/',
          route:'StaffingHub media kit inquiry', routeUrl:'https://staffinghub.com/staffing-industry-recruiting-marketing-executive-media-kit/', owner:'Marketing · demo owner',
          pitch:'Your recent credentialing coverage identified where staffing agencies lose time after intake. Would a short operator-led follow-up on screening exceptions and handoffs fit the Daily Insights audience?',
          deliverable:'Proposed newsletter feature with a sourced agency example. Confirm the editorial route and distribution.',
          next:'Ask for the current subscriber role mix and per-issue reach. Keep podcast metrics on their own placement.'
        },
        {
          id:'mentors', name:'Hishem Azzouz', placement:'Recruitment Mentors podcast', format:'audio', audience:1, audienceLabel:'Agency-oriented guests',
          fit:'The UK-based host interviews billers and agency founders. The public recruiter reach claim does not identify how many listeners are US or UK agency decision-makers.',
          grades:[[2,'Episodes cover agency operating practices, with limited healthcare workflow detail in the reviewed sample.'],[3,'Named recruitment agency founders and billers feature in the show.'],[3,'The host is a former recruiter and interviews operators about firsthand experience.']],
          reach:'60,000+ recruiters/month', reachGrade:1, reachDetail:'Publisher headline. Platform breakdown and episode downloads are unknown.',
          source:'https://www.recruitmentmentors.com/', sample:'From Zero to a $100M Valuation', sampleUrl:'https://www.recruitmentmentors.com/',
          route:'Brand partnership inquiry', routeUrl:'https://www.recruitmentmentors.com/podcast-partnerships/brand/', owner:'Partnerships · proposed',
          pitch:'Would you be interested in a conversation about increasing recruiter throughput while keeping screening review with the agency? Could you share recent episode reach and the agency-owner share for similar interviews?',
          deliverable:'Proposed interview or integrated brand placement, subject to format and terms.',
          next:'Verify comparable episode reach, decision-maker share and UK/US split.'
        }
      ]
    }
  };
  const topicPlacements = {
    bpo: {
      id:'cxoutsourcers', name:'CxOutsourcers', placement:'Madrid Mindshare roundtable', format:'event', audience:1, audienceLabel:'Provider-only eligibility',
      fit:'The ticket limits delegate eligibility to CX BPO executives. Actual attendance and finance-outsourcing overlap are unknown.',
      grades:[[1,'Topics focus on CX rather than finance back-office delivery.'],[2,'The program targets provider executives in an adjacent niche.'],[3,'The event runs executive roundtables and industry sessions.']],
      reach:'Attendance unknown', reachGrade:0, reachDetail:'The May 2027 event has not taken place.',
      source:'https://cxoutsourcers.com/product/cxoutsourcers-mindshare-event-ticket-2027/', sample:'Madrid Mindshare · May 2027', sampleUrl:'https://cxoutsourcers.com/',
      route:'Event partnership inquiry', routeUrl:'https://cxoutsourcers.com/', owner:'Partnerships · proposed',
      pitch:'Could we explore a roundtable on margin protection for providers with finance back-office operations?',
      deliverable:'Proposed executive roundtable, subject to organizer agreement.',
      next:'Verify finance-outsourcing coverage before pursuing a partnership.'
    },
    rpo: {
      id:'staffing-show', name:'David Folwell · StaffingHub', placement:'The Staffing Show podcast', format:'audio', audience:1, audienceLabel:'Healthcare staffing topic',
      fit:'The episode explores agency credentialing. The named guest is a technology vendor. Current listener composition is unknown.',
      grades:[[4,'A dedicated episode covers credentialing, candidate checks and workflow bottlenecks.'],[3,'The show covers staffing operators, with recurring industry interviews.'],[2,'This episode relies on a technology vendor’s perspective.']],
      reach:'Downloads unknown', reachGrade:0, reachDetail:'Daily Insights subscriber counts apply to email.',
      source:'https://staffinghub.com/the-staffing-show/an-hour-per-placement-fixing-healthcare-credentialing-with-eric-ly-of-karmacheck/', sample:'An hour per placement', sampleUrl:'https://staffinghub.com/the-staffing-show/an-hour-per-placement-fixing-healthcare-credentialing-with-eric-ly-of-karmacheck/',
      route:'StaffingHub publisher inquiry', routeUrl:'https://staffinghub.com/staffing-industry-recruiting-marketing-executive-media-kit/', owner:'Marketing · demo owner',
      pitch:'Your credentialing episode covered where documents slow placements. Would an agency operator be useful for a follow-up on screening and handoff exceptions?',
      deliverable:'Proposed podcast interview with an operator and a show-notes link.',
      next:'Ask for comparable episode downloads and the share of agency decision-makers.'
    }
  };
  const weeklyPlacements = {
    bpo:{
      ...profiles.bpo.placements[1],
      id:'accelerator-podcast', name:'Derek Gallimore', placement:'Outsource Accelerator podcast', format:'audio', audience:1, audienceLabel:'Provider guests',
      fit:'The show interviews outsourcing operators, including D&V Philippines on finance and accounting. Its listener mix is unknown.',
      grades:[[3,'The D&V Philippines episode directly covers finance outsourcing.'],[2,'The show serves the wider outsourcing industry.'],[3,'A named finance provider executive contributes to the episode.']],
      reach:'Downloads unknown', reachGrade:0, reachDetail:'Published episode count measures output. Newsletter sends apply to email.',
      sample:'Finance and accounting outsourcing with D&V Philippines', sampleUrl:'https://www.outsourceaccelerator.com/articles/finance-and-accounting/',
      rate:'$1,999/episode listed publicly. Confirm currency and terms.',
      pitch:'Could we discuss a provider-side episode about handling invoice exceptions and measuring delivery costs?',
      deliverable:'Published package includes a podcast interview, show notes and newsletter promotion.',
      next:'Check provider-side listener fit and comparable 30-day downloads.'
    },
    rpo:{
      ...profiles.rpo.placements[1],
      id:'asa-masterclass', name:'Lauren B. Jones · ASA', placement:'Staffing AI masterclass', format:'event', audience:1, audienceLabel:'Agency leaders invited',
      fit:'The series explicitly invites staffing agency leaders and recruiters. Registrant composition and agency size are unknown.',
      grades:[[3,'The syllabus covers practical AI applications inside staffing agencies.'],[3,'The series addresses agency operators and recruiters.'],[3,'The named instructor runs a staffing technology advisory firm.']],
      reach:'Attendance unknown', reachGrade:0, reachDetail:'Public schedule lists six sessions. Attendance and attendee mix were not published on the program page.',
      source:'https://americanstaffing.net/interactive-masterclass-series/', sample:'Practical AI for Staffing Agencies', sampleUrl:'https://americanstaffing.net/interactive-masterclass-series/',
      pitch:'Would a session on setting screening review rules and measuring recruiter throughput fit a future agency program?',
      deliverable:'Proposed agency workshop with a staffed Q&A and optional tracked resource link.',
      next:'Check attendee fit and whether ASA accepts guest operators for future sessions.'
    }
  };
  const topicActions = {
    bpo:{id:'evostr-news', text:'Delivery margins · Share an invoice-exception example in response to Evostr’s coverage.'},
    rpo:{id:'staffinghub', text:'Credentialing · Offer an agency operator for a follow-up to StaffingHub’s coverage.'}
  };
  const replayProof = {
    bpo:{id:'cfo-show', matched:18, observed:30},
    rpo:{id:'staffinghub', matched:12, observed:40}
  };
  const schema = [
    ['template_version','1','Keep version 1.'],
    ['icp_name','','Give the ICP a unique name.'],
    ['buyer_roles','','Name the job titles and who can approve a purchase.'],
    ['company_type','','Describe the business model and who the company serves.'],
    ['markets','','List included countries or regions.'],
    ['employee_min','','Enter the minimum headcount as a whole number.'],
    ['employee_max','','Enter the maximum headcount as a whole number.'],
    ['qualifiers','','List observable must-have signals.'],
    ['exclusions','','List companies, roles, or business models to exclude.'],
    ['priority_workflows','','Name the work buyers need to improve.'],
    ['buyer_problem','','Describe the operational problem in the buyer’s terms.'],
    ['beam_positioning','','Say what Beam does for these buyers and why it matters.'],
    ['approved_proof','','Provide an approved claim and source or state no proof approved.'],
    ['discovery_terms','','Provide search terms or alternatives buyers use.'],
    ['seed_companies','','List reference companies or write none.'],
    ['success_metric','','Name the outcome the collaboration should drive.']
  ];
  const library = new Map([
    ['bpo',{name:'BPO', description:'Finance outsourcing providers · US and Western Europe · 500–5,000 staff', profile:profiles.bpo}],
    ['rpo',{name:'RPO', description:'Staffing and recruitment agencies · US and UK · 20–500 staff', profile:profiles.rpo}]
  ]);
  let active = null;
  let selected = null;
  let page = 'icps';
  let workflowPage = 'icps';
  let dashboardIcp = 'all';
  let dashboardStage = 'all';
  let outcomeKey = null;
  let pending = null;
  let uploadVersion = 0;
  const extras = new Map();
  const records = new Map();
  const quoteModes = new Set();
  const reports = new Set();
  const escape = value => String(value ?? '').replace(/[&<>"']/g,char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const link = (url,label) => '<a href="' + escape(url) + '" target="_blank" rel="noopener noreferrer">' + escape(label) + ' ↗</a>';
  const action = (label,key,value='',primary=false) => '<button type="button" class="' + (primary ? 'ce-primary' : 'ce-outline') + '" data-action="' + key + '" data-value="' + escape(value) + '">' + escape(label) + '</button>';
  const field = (label,html) => '<div><dt>' + escape(label) + '</dt><dd>' + html + '</dd></div>';
  const data = html => '<dl class="ce-data">' + html + '</dl>';
  const fold = (label,html) => '<details><summary>' + escape(label) + '</summary>' + html + '</details>';
  const heading = (title,sub) => '<div class="ce-hero"><h2>' + escape(title) + '</h2><p>' + escape(sub) + '</p></div>';
  const template = values => ['Field\tValue\tGuidance',...schema.map(([key,fallback,guide]) => [key,values?.[key] ?? fallback,guide].join('\t'))].join('\n') + '\n';
  const demoIcp = {
    icp_name:'Healthcare credentialing',buyer_roles:'Agency owners and heads of credentialing',company_type:'US healthcare staffing agencies placing clinicians for clients',
    markets:'United States',employee_min:'20',employee_max:'500',qualifiers:'Places clinicians and has an internal credentialing team',
    exclusions:'Hospitals hiring directly and software vendors',priority_workflows:'Candidate document review and credentialing handoff',
    buyer_problem:'Recruiters lose time chasing missing documents and resolving exceptions',beam_positioning:'Beam helps agency teams organize candidate documents and route screening exceptions for human review',
    approved_proof:'No proof approved',discovery_terms:'healthcare staffing credentialing podcast, locum tenens agency newsletter',seed_companies:'None',success_metric:'Qualified agency meetings'
  };
  const current = () => library.get(active);
  const score = item => {
    const audience = reports.has(active + ':' + item.id) ? 4 : item.audience;
    const editorial = item.grades.reduce((sum,[value]) => sum + value,0);
    return {audience,editorial,total:Math.round(65 * audience / 4 + 35 * editorial / 12)};
  };
  const band = n => n >= 75 ? 'Strong' : n >= 50 ? 'Medium' : 'Low';
  const meter = item => {
    const n = score(item).total;
    return '<div class="ce-score" data-band="' + band(n) + '"><strong>' + n + '</strong><small> / 100 · ' + band(n) + '</small><span class="ce-track" aria-hidden="true"><i style="width:' + n + '%"></i></span></div>';
  };
  const items = () => [...(current()?.profile?.placements || []),...(extras.get(active) || [])].sort((a,b) => score(b).total - score(a).total);
  const item = () => items().find(candidate => candidate.id === selected);
  const quoteMode = () => quoteModes.has(active + ':' + selected);
  const recordKey = (icp,candidate,editorialQuote) => [icp,candidate.id,editorialQuote ? 'quote' : 'placement'].join(':');
  const newRecord = (icp,candidate,editorialQuote) => ({
    icp,candidate,editorialQuote,stage:'draft',channel:null,draft:null,subject:null,reply:'',quote:'',publishedUrl:'',
    token:null,tests:[],events:[],recap:false,sentAt:null,followUpAt:null,updatedAt:Date.now(),meetings:0
  });
  const state = () => {
    const candidate = item();
    const key = recordKey(active,candidate,quoteMode());
    if (!records.has(key)) records.set(key,newRecord(active,candidate,quoteMode()));
    return records.get(key);
  };
  const rate = candidate => candidate.rate || 'Rate not published';
  const show = next => {
    page = next;
    const isDashboard = next === 'results';
    document.getElementById('mi-view-title').textContent = isDashboard ? 'Outreach dashboard' : 'Creators';
    if (!isDashboard) workflowPage = next;
    root.querySelector('.ce-nav').hidden = isDashboard;
    if (isDashboard) find('workflow-view').removeAttribute('aria-current');
    else find('workflow-view').setAttribute('aria-current','page');
    for (const key of ['icps','creators','contact','results']) {
      find(key).hidden = key !== next;
      const nav = shell.querySelector('[data-go="' + key + '"]');
      nav.disabled = (key === 'creators' && !active) || (key === 'contact' && !selected);
      if (key === next) nav.setAttribute('aria-current',isDashboard ? 'page' : 'step');
      else nav.removeAttribute('aria-current');
    }
    if (page === 'creators') renderCreators();
    if (page === 'contact') renderContact();
    if (page === 'results') renderResults();
  };
  const renderLibrary = () => {
    find('library').innerHTML = [...library].map(([id,entry]) => '<article class="ce-tile"><h3>' + escape(entry.name) + '</h3><p class="ce-muted">' + escape(entry.description) + '</p>' + action('Select ' + entry.name,'select',id,true) + '</article>').join('');
  };

  function validate(contents) {
    const values = Object.create(null);
    const errors = [];
    const rows = contents.replace(/^\uFEFF/,'').trimEnd().split(/\r?\n/);
    if (!/^Field\tValue(?:\tGuidance)?$/.test(rows[0])) errors.push('Use the downloaded TSV with the Field and Value columns.');
    for (const row of rows.slice(1)) {
      if (!row.trim()) continue;
      const [key,value] = row.split('\t');
      if (!schema.some(([field]) => field === key)) {errors.push('Unknown field: ' + key + '. Keep the template field names.'); continue;}
      if (Object.hasOwn(values,key)) errors.push(key + ': duplicate row.');
      values[key] = value?.trim() || '';
    }
    for (const [key,,guide] of schema) {
      if (!values[key] || /^(tbd|n\/a|unknown|todo|\[.*\])$/i.test(values[key])) errors.push(key + ' · ' + guide);
    }
    if (values.template_version && values.template_version !== '1') errors.push('template_version · Use the current version 1 template.');
    if (values.icp_name && [...library.values()].some(entry => entry.name.toLowerCase() === values.icp_name.toLowerCase())) errors.push('icp_name · This name already exists.');
    if ([values.employee_min,values.employee_max].every(Boolean)) {
      const [min,max] = [values.employee_min,values.employee_max];
      if (![min,max].every(n => /^\d+$/.test(n) && Number.isSafeInteger(Number(n)) && Number(n) > 0) || Number(min) > Number(max)) errors.push('employee_min / employee_max · Enter positive whole numbers in ascending order.');
    }
    for (const key of ['buyer_problem','beam_positioning','company_type','priority_workflows','buyer_roles']) {
      if (values[key] && values[key].length < 12) errors.push(key + ' · Add specific detail the research and pitch can use.');
    }
    if (values.qualifiers && values.qualifiers.toLowerCase() === values.exclusions?.toLowerCase()) errors.push('qualifiers / exclusions · The same criteria appear in both fields.');
    if (values.beam_positioning && values.beam_positioning.toLowerCase() === values.buyer_problem?.toLowerCase()) errors.push('beam_positioning · Explain how Beam helps solve the stated problem.');
    if (/^(all|any|everyone|anyone|global|worldwide)$/i.test(values.markets || '')) errors.push('markets · List the countries or regions you intend to reach.');
    if (/^(all|any|everyone|anyone|all industries|all companies)$/i.test(values.company_type || '')) errors.push('company_type · Name the kind of company that should qualify.');
    pending = errors.length ? null : values;
    find('approve').disabled = !pending;
    find('validation').innerHTML = errors.length
      ? '<div class="ce-note"><strong>Fix these fields, then upload again</strong><ul>' + errors.map(error => '<li>' + escape(error) + '</li>').join('') + '</ul></div>'
      : '<div class="ce-note"><strong>File checks passed · review before approval</strong></div>' + data(
        field('ICP',escape(values.icp_name)) + field('Buyers',escape(values.buyer_roles)) + field('Companies',escape(values.company_type)) +
        field('Markets and size',escape(values.markets + ' · ' + values.employee_min + '–' + values.employee_max + ' staff')) +
        field('Workflow and problem',escape(values.priority_workflows + ' · ' + values.buyer_problem)) +
        field('Positioning',escape(values.beam_positioning)) + field('Exclusions',escape(values.exclusions))) +
        '<p class="ce-muted">Check that the roles, company type, workflow and positioning describe the same buyer.</p>';
  }
  find('download').href = 'data:text/tab-separated-values;charset=utf-8,' + encodeURIComponent(template());
  find('template-text').value = template();
  find('add').addEventListener('click',() => {
    uploadVersion++;
    pending = null;
    find('file').value = '';
    find('validation').textContent = '';
    find('approve').disabled = true;
    find('intake').showModal();
  });
  find('example').addEventListener('click',() => {uploadVersion++; validate(template(demoIcp));});
  find('file').addEventListener('change',async event => {
    const version = ++uploadVersion;
    pending = null;
    find('approve').disabled = true;
    const file = event.target.files[0];
    if (!file) {find('validation').textContent = ''; return;}
    if (file.size > 256000) {find('validation').textContent = 'Use the TSV template and keep it under 256 KB.'; return;}
    try {
      const contents = await file.text();
      if (version === uploadVersion) validate(contents);
    } catch {
      if (version === uploadVersion) find('validation').textContent = 'This file could not be read. Upload the completed TSV again.';
    }
  });
  find('approve').addEventListener('click',() => {
    if (!pending) return;
    const id = 'custom-' + crypto.randomUUID();
    library.set(id,{name:pending.icp_name,description:pending.company_type + ' · ' + pending.markets,uploaded:pending});
    pending = null;
    find('approve').disabled = true;
    find('intake').close();
    renderLibrary();
    find('library').querySelector('[data-value="' + id + '"]').focus();
  });

  function renderCreators() {
    const entry = current();
    const list = items();
    const profile = entry.profile;
    const intro = heading(entry.name + ' · Vetted creators',profile ? 'Public research snapshot · Nov 13' : 'Approved ICP · awaiting discovery');
    if (!profile) {
      find('creators').innerHTML = intro + '<div class="ce-note"><strong>No vetted placements yet</strong><p>This ICP is available for discovery. Live search requires the connected backend.</p></div>' +
        fold('Approved positioning',data(field('Buyer roles',escape(entry.uploaded.buyer_roles)) + field('Positioning',escape(entry.uploaded.beam_positioning)) + field('Exclusions',escape(entry.uploaded.exclusions))));
      return;
    }
    const coverage = '<ol>' + profile.trail.map(([label,summary,url]) => '<li><strong>' + escape(label) + '</strong> ' + escape(summary) + ' ' + link(url,'Source') + '</li>').join('') + '</ol>';
    find('creators').innerHTML = intro +
      '<div class="ce-summary"><h3>Top three</h3><small>Fit / 100 · 75–100 Strong · 50–74 Medium · 0–49 Low</small></div>' +
      '<div class="ce-top">' + list.slice(0,3).map((candidate,index) => '<button type="button" class="ce-tile" data-action="detail" data-value="' + candidate.id + '"><small>#' + (index + 1) + ' · ' + escape(candidate.audienceLabel) + '</small><span><strong>' + escape(candidate.name) + '</strong></span>' + meter(candidate) + '</button>').join('') + '</div>' +
      '<div class="ce-summary"><h3>All vetted placements · ' + list.length + '</h3><small>Sources checked · buyer overlap varies</small></div>' +
      '<div class="ce-list" role="list" aria-label="Vetted placements"><div class="ce-row ce-labels" aria-hidden="true"><div>Creator / placement</div><div>Fit</div><div>Public reach</div><div>Deliverable / rate</div></div>' +
      list.map(candidate => '<div class="ce-row" role="listitem"><div><button type="button" data-action="detail" data-value="' + candidate.id + '">' + escape(candidate.name) + '</button><small>' + escape(candidate.placement) + '</small></div><div>' + meter(candidate) + '</div><div>' + escape(candidate.reach) + '</div><div>' + escape(candidate.deliverable) + '<small>' + escape(rate(candidate)) + '</small></div></div>').join('') + '</div>' +
      fold('Search trail and weekly updates',coverage + '<p class="ce-note">Weekly discovery and topic alerts are planned. Topic watch: ' + escape(profile.topic[0]) + ' · ' + link(profile.topic[2],'Source') + ' · ' + link(profile.topic[3],'Source') + '</p>' +
      action('Replay weekly refresh','weekly') + ' ' + action('Replay topic discovery','topic') +
      '<p><small>Public web, publisher pages and event agendas. Clay checks people and companies. Content Intelligence supplies topic signals.</small></p>');
  }

  function renderDetail(candidate) {
    const result = score(candidate);
    const pilot = replayProof[active];
    const replayed = reports.has(active + ':' + candidate.id);
    find('detail-content').innerHTML = '<div class="ce-dialog-head"><h2 id="ce-detail-title">' + escape(candidate.name) + '</h2><button type="button" class="ce-outline" data-close="detail">Close</button></div><p class="ce-muted">' + escape(candidate.placement) + '</p>' + meter(candidate) +
      '<div class="ce-split"><div class="ce-tile"><h3>Audience and reach</h3>' + data(field('Audience evidence · ' + result.audience + '/4',escape(candidate.fit)) + field('Public reach · ' + candidate.reachGrade + '/3 evidence',escape(candidate.reach + '. ' + candidate.reachDetail))) + '</div>' +
      '<div class="ce-tile"><h3>Commercial terms</h3>' + data(field('Deliverable',escape(candidate.deliverable)) + field('Rate / range',escape(rate(candidate))) + field('Contact route',link(candidate.routeUrl,candidate.route))) + '</div></div>' +
      fold('Why it scored ' + result.total, '<p>Audience evidence contributes up to 65 points. Editorial fit contributes up to 35. Public reach is shown separately because sends, subscribers and downloads have different units.</p>' +
      data(field('Editorial fit · ' + result.editorial + '/12',candidate.grades.map(([n,reason]) => '<p><strong>' + n + '/4</strong> ' + escape(reason) + '</p>').join(''))) +
      '<p>' + link(candidate.source,'Public evidence') + ' · ' + link(candidate.sampleUrl,candidate.sample) + (candidate.supportingSource ? ' · ' + link(candidate.supportingSource,candidate.supportingLabel) : '') + '</p>') +
      '<p class="ce-note">' + escape(candidate.next) + '</p><p>' + link(candidate.sampleUrl,'Open content sample') + (candidate.id === 'cfo-show' ? ' · ' + link('https://scalenorth.com/insights/finance-and-accounting-outsourcing','Watch episode clips') : '') + '</p>' +
      (candidate.id === pilot.id ? '<p><small>' + (replayed ? 'Demo pilot: ' + pilot.matched + ' of ' + pilot.observed + ' matched the ICP.' : 'Full ICP overlap remains unverified.') + '</small></p>' + action(replayed ? 'Remove demo report' : 'Replay audience report','proof',candidate.id) : '') +
      '<div class="ce-actions">' + action('Proceed to contact','proceed',candidate.id,true) + '</div>';
  }

  const excerpts = {
    'evostr-news':'Your BPO discovery piece made the case for defining the problem before quoting. Could we build on that with a practical example showing how finance BPO operators identify invoice exceptions before they automate?',
    nalto:'Your credentialing guidelines spell out the checks agencies must perform on a physician’s CV, references and licenses. Could we offer a short News Brief feature on organizing those documents and routing exceptions to a reviewer?'
  };
  function renderContact() {
    const candidate = item();
    const rec = state();
    const editorialQuote = quoteMode();
    const channel = rec.channel || (/form|inquiry/i.test(candidate.route) ? 'form' : 'email');
    const sent = rec.stage !== 'draft';
    const defaultPitch = editorialQuote
      ? (active === 'bpo' ? 'Start with one finance workflow and map the exceptions. The exceptions show where a person still needs to make a judgment.' : 'Agree on what can be checked consistently, then route exceptions to the recruiter who can review them.')
      : excerpts[candidate.id] || candidate.pitch;
    const body = rec.draft ?? (channel === 'linkedin' || channel === 'instagram' ? defaultPitch + ' Open to a short outline?' : defaultPitch);
    const sender = channel === 'email' ? 'Shared Beam Gmail · demo sender' : candidate.owner;
    const inbox = channel === 'email'
      ? 'The shared Beam Gmail inbox sends the pitch and syncs replies on the same thread. Connect your work Gmail only if you want to send from your own mailbox.'
      : 'Send through the creator’s published route, then log the send and paste any reply here. Follow-up reminders use the activity on this record.';
    find('contact').innerHTML = heading('Contact ' + candidate.name,candidate.placement) +
      '<div class="ce-split"><div class="ce-tile"><h3>' + (editorialQuote ? 'Expert quote draft' : 'Pitch draft') + '</h3><label class="ce-field" for="ce-channel">Channel</label><select id="ce-channel"' + (sent ? ' disabled' : '') + '>' +
      [['email','Email'],['form','Published form'],['linkedin','LinkedIn DM'],['instagram','Instagram DM'],['warm','Warm intro']].map(([id,label]) => '<option value="' + id + '"' + (channel === id ? ' selected' : '') + '>' + label + '</option>').join('') +
      '</select><label class="ce-field" for="ce-subject">Subject / topic</label><input type="text" id="ce-subject" value="' + escape(rec.subject ?? (active === 'bpo' ? 'A finance operations example for ' + candidate.placement : 'A staffing operations example for ' + candidate.placement)) + '"' + (sent ? ' readonly' : '') + '>' +
      '<label class="ce-field" for="ce-draft">Message</label><textarea id="ce-draft"' + (sent ? ' readonly' : '') + '>' + escape(body) + '</textarea>' +
      '<p><small>Personalization source · ' + link(candidate.sampleUrl,candidate.sample) + '</small></p></div>' +
      '<div class="ce-tile"><h3>Sender and terms</h3>' + data(field('Owner',escape(candidate.owner)) + field('Sender',escape(sender)) +
      field('Published route',link(candidate.routeUrl,candidate.route)) + field('Deliverable',escape(editorialQuote ? 'One attributed expert quote. Confirm the spokesperson and deadline.' : candidate.deliverable)) +
      field('Public rate / range',escape(editorialQuote ? 'Confirm editorial terms' : rate(candidate))) + field('Quoted rate',escape(rec.quote || 'Awaiting reply'))) +
      '<p class="ce-note">' + escape(inbox) + '</p></div></div>' +
      (sent ? '' : action(channel === 'email' ? 'Approve and replay send' : 'Log demo send','send',channel,true)) +
      '<div class="ce-tile" style="margin-top:12px"><h3>Activity and replies</h3>' +
      (rec.events.length ? '<ol class="ce-instructions">' + rec.events.map(event => '<li>' + escape(event) + '</li>').join('') + '</ol>' : '<p class="ce-muted">Draft ready for review.</p>') +
      (rec.reply ? '<blockquote class="ce-note">' + escape(rec.reply) + '</blockquote>' : '') +
      (rec.stage === 'sent' ? '<label class="ce-field" for="ce-reply">Log a reply</label><textarea id="ce-reply" placeholder="Paste the reply"></textarea><label class="ce-field" for="ce-rate">Rate or terms quoted</label><input type="text" id="ce-rate" placeholder="Amount, currency, deliverable, rights and expiry">' +
        '<div class="ce-actions">' + action('Save reply','reply','',true) + (channel === 'email' ? action('Replay synced Gmail reply','sync') : '') + action('Log decline','decline') + action('Log opt-out','optout') + '</div><p id="ce-reply-error" role="alert"></p>' : '') +
      (rec.stage === 'replied' ? action('Confirm booking · demo','book','',true) : '') +
      (rec.stage === 'booked' ? '<label class="ce-field" for="ce-published">Published placement URL</label><input type="text" id="ce-published" placeholder="https://…"><div class="ce-actions">' + action('Log publication','publish','',true) + action('Replay publication','publish','demo') + '</div><p id="ce-publish-error" role="alert"></p>' : '') +
      (sent ? '<div class="ce-actions">' + action('View outreach dashboard','results') + '</div>' : '') + '</div>' +
      fold('Expert quote and release brief','<p>Record the question, spokesperson, deadline and published mention. Attach an approved Beam release for creator talking points.</p><div class="ce-actions">' + action(editorialQuote ? 'Return to placement pitch' : 'Draft an expert quote','quote-mode') + '</div>');
  }

  const stageLabels = {sent:'Awaiting reply',replied:'Replied',booked:'Booked',published:'Published',declined:'Declined',optedOut:'Opted out'};
  const channelLabels = {email:'Email',form:'Published form',linkedin:'LinkedIn DM',instagram:'Instagram DM',warm:'Warm intro'};
  const dateLabel = time => new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',timeZone:'Asia/Karachi'}).format(time);
  const leads = record => Number(record.tests.includes('valid'));
  const status = record => '<span class="ce-status" data-stage="' + record.stage + '">' + stageLabels[record.stage] + '</span>';
  const latest = record => ({
    sent:record.followUpAt ? 'Follow up by ' + dateLabel(record.followUpAt) : 'Waiting for a reply',
    replied:'Review reply and confirm terms',
    booked:'Confirm publication date',
    published:record.recap ? 'Recap logged' : 'Send thank-you and recap',
    declined:'Follow-up canceled',
    optedOut:'Contact suppressed'
  })[record.stage];
  const dashboardRecords = () => [...records.entries()].filter(([,record]) => record.sentAt !== null)
    .sort((a,b) => b[1].updatedAt - a[1].updatedAt);
  const option = (value,label,chosen) => '<option value="' + escape(value) + '"' + (value === chosen ? ' selected' : '') + '>' + escape(label) + '</option>';
  const dashboardMetric = (label,value) => '<div class="ce-tile"><small>' + label + '</small><strong>' + value + '</strong></div>';

  function renderResults() {
    const all = dashboardRecords();
    const scoped = all.filter(([,record]) => dashboardIcp === 'all' || record.icp === dashboardIcp);
    const visible = scoped.filter(([,record]) => dashboardStage === 'all' || record.stage === dashboardStage);
    const replied = scoped.filter(([,record]) => record.reply).length;
    const published = scoped.filter(([,record]) => record.stage === 'published').length;
    const qualified = scoped.reduce((sum,[,record]) => sum + leads(record),0);
    const meetings = scoped.reduce((sum,[,record]) => sum + record.meetings,0);
    find('results').innerHTML = heading('Outreach dashboard','All outreach · Demo records') +
      '<div class="ce-filters"><label for="ce-dashboard-icp">ICP<select id="ce-dashboard-icp">' + option('all','All ICPs',dashboardIcp) +
      [...library].map(([key,value]) => option(key,value.name,dashboardIcp)).join('') + '</select></label>' +
      '<label for="ce-dashboard-stage">Status<select id="ce-dashboard-stage">' + option('all','All statuses',dashboardStage) +
      Object.entries(stageLabels).map(([key,label]) => option(key,label,dashboardStage)).join('') + '</select></label><p class="ce-muted" role="status">' + visible.length + ' of ' + scoped.length + ' placements</p></div>' +
      '<div class="ce-rollup">' + dashboardMetric('Contacted',scoped.length) + dashboardMetric('Replies',replied) +
      dashboardMetric('Published',published) + dashboardMetric('Qualified leads / meetings',qualified + ' / ' + meetings) + '</div>' +
      (visible.length ? '<div class="ce-list" role="list" aria-label="Outreach placements">' +
        '<div class="ce-row ce-outreach-row ce-labels" aria-hidden="true"><div>Creator / placement</div><div>Status</div><div>Latest activity / next action</div><div>Outcomes</div></div>' +
        visible.map(([key,record]) => {
          const candidate = record.candidate;
          const reach = record.actualReach || (record.editorialQuote ? 'Editorial mention' : 'Reach pending');
          const outcome = record.editorialQuote ? '' : '<small>' + leads(record) + ' qualified · ' + record.meetings + (record.meetings === 1 ? ' meeting' : ' meetings') + '</small>';
          return '<div class="ce-row ce-outreach-row" role="listitem"><div><button type="button" data-action="outcome" data-value="' + escape(key) + '">' + escape(candidate.name) + '</button>' +
            '<small>' + escape(library.get(record.icp).name + ' · ' + candidate.placement + (record.editorialQuote ? ' · Expert quote' : '')) + '</small><small>' + escape(candidate.owner + ' · ' + channelLabels[record.channel]) + '</small></div>' +
            '<div>' + status(record) + '</div><div><strong>' + escape(latest(record)) + '</strong><small>' + escape(dateLabel(record.updatedAt) + ' · ' + (record.reply || record.events.at(-1) || 'Outreach recorded')) + '</small></div>' +
            '<div>' + escape(reach) + outcome + '</div></div>';
        }).join('') + '</div>' :
        '<div class="ce-note">' + (all.length ? 'No outreach matches these filters.' : 'Outreach appears here once a send is recorded.') + '</div>');
  }

  function renderOutcome(key) {
    const rec = records.get(key);
    const candidate = rec.candidate;
    const editorialQuote = rec.editorialQuote;
    const credited = Number(rec.tests.includes('valid'));
    const descriptions = {valid:'Valid link · one test submission credited to this placement.',duplicate:'Duplicate submission · count stays at one.',altered:'Altered code · no placement credit.'};
    find('outcome-content').innerHTML = '<div class="ce-dialog-head"><h2 id="ce-outcome-title">' + escape(candidate.name) + '</h2><button type="button" class="ce-outline" data-close="outcome">Close</button></div>' +
      '<p>' + escape(library.get(rec.icp).name + ' · ' + candidate.placement) + ' ' + status(rec) + '</p>' +
      '<div class="ce-split"><div class="ce-tile"><h3>' + (editorialQuote ? 'Editorial coverage' : 'Attribution') + '</h3>' +
      (editorialQuote ? '<p>Track the published mention. Link optional.</p>' : '<p>Placement link → Fillout → HubSpot</p>' +
      (rec.token ? '<p><code>/r/' + rec.token + '</code> · Demo link</p><div class="ce-actions">' + action(credited ? 'Replay duplicate' : 'Replay valid submission',credited ? 'duplicate' : 'valid','',true) +
        action('Replay altered code','altered') + '</div><ul class="ce-instructions">' + rec.tests.map(test => '<li>' + descriptions[test] + '</li>').join('') + '</ul>' : '<p class="ce-muted">Confirm the booking to create a placement link.</p>')) +
      '</div><div class="ce-tile"><h3>Reporting and follow-up</h3>' + data(field('Actual reach',escape(rec.actualReach || 'Pending')) +
      (editorialQuote ? '' : field('Qualified leads / meetings',credited + ' / ' + rec.meetings)) +
      field('Public benchmark',escape(candidate.reach)) + field('Published placement',rec.publishedUrl ? (rec.publishedUrl === 'demo' ? 'Publication recorded in demo' : link(rec.publishedUrl,'Open placement')) : 'Pending') +
      field('Next action',escape(latest(rec)))) +
      (rec.stage === 'published' && !rec.recap ? '<div class="ce-actions">' + action('Log demo recap','recap') + '</div>' : '') + '</div></div>' +
      (rec.reply ? '<div class="ce-note"><strong>Reply</strong><p>' + escape(rec.reply) + '</p></div>' : '') +
      '<div class="ce-actions">' + action('Open outreach record','open-outreach',key,true) + '</div>';
  }

  function seedDashboard() {
    const samples = [
      {icp:'bpo',id:'cfo-show',stage:'sent',channel:'form',daysAgo:5,events:['Demo guest pitch logged. Follow-up queued.']},
      {icp:'bpo',id:'better-bpo',stage:'replied',channel:'email',daysAgo:3,reply:'Please send an outline for the episode and a short guest bio.',events:['Demo reply logged. Follow-up canceled.']},
      {icp:'rpo',id:'mentors',stage:'booked',channel:'form',daysAgo:4,reply:'We can reserve a recording slot. Please send your preferred topic.',events:['Demo booking confirmed.']},
      {icp:'rpo',id:'asa',stage:'published',channel:'form',daysAgo:8,reply:'The placement is live. We can share the issue report.',actualReach:'860 opens · one issue',meetings:1,tests:['valid'],publishedUrl:'demo',events:['Demo publication logged. Recap queued.']}
    ];
    const day = 86400000;
    for (const {icp,id,daysAgo,...sample} of samples) {
      const candidate = library.get(icp).profile.placements.find(placement => placement.id === id);
      const sentAt = Date.now() - daysAgo * day;
      const token = ['booked','published'].includes(sample.stage) ? crypto.randomUUID().replaceAll('-','') : null;
      records.set(recordKey(icp,candidate,false),{
        ...newRecord(icp,candidate,false),...sample,sentAt,token,updatedAt:sentAt + (sample.stage === 'sent' ? 0 : day),
        followUpAt:sample.stage === 'sent' ? sentAt + 7 * day : null
      });
    }
  }

  function addPlacement(trigger) {
    const candidate = (trigger === 'weekly' ? weeklyPlacements : topicPlacements)[active];
    const existing = extras.get(active) || [];
    if (!existing.some(row => row.id === candidate.id)) extras.set(active,[...existing,candidate]);
    renderCreators();
    const details = find('creators').querySelector('details');
    details.open = true;
    details.querySelector('summary').focus();
    const note = document.createElement('p');
    note.className = 'ce-note';
    note.setAttribute('role','status');
    note.textContent = (existing.some(row => row.id === candidate.id) ? 'Already on the list: ' : 'Demo discovery added ') + candidate.name;
    details.append(note);
  }

  root.addEventListener('input',event => {
    const keys = {'ce-draft':'draft','ce-subject':'subject'};
    if (keys[event.target.id] && selected) state()[keys[event.target.id]] = event.target.value;
  });
  root.addEventListener('change',event => {
    if (['ce-dashboard-icp','ce-dashboard-stage'].includes(event.target.id)) {
      const id = event.target.id;
      if (id === 'ce-dashboard-icp') dashboardIcp = event.target.value;
      else dashboardStage = event.target.value;
      renderResults();
      root.querySelector('#' + id).focus();
      return;
    }
    if (event.target.id === 'ce-channel') {
      state().channel = event.target.value;
      state().draft = null;
      renderContact();
      find('channel').focus();
    }
  });
  shell.addEventListener('click',event => {
    const button = event.target.closest('button');
    if (!button) return;
    const {go,close,action:key,value} = button.dataset;
    if (button.id === 'ce-workflow-view') {show(workflowPage);return;}
    if (go) {show(go);return;}
    if (close) {find(close).close();return;}
    if (!key) return;
    if (key === 'select') {active = value;selected = null;show('creators');return;}
    if (key === 'detail') {renderDetail(items().find(row => row.id === value));find('detail').showModal();return;}
    if (key === 'proceed') {selected = value;find('detail').close();show('contact');return;}
    if (key === 'proof') {
      const proofKey = active + ':' + value;
      if (!reports.delete(proofKey)) reports.add(proofKey);
      renderCreators();
      renderDetail(items().find(row => row.id === value));
      return;
    }
    if (['weekly','topic'].includes(key)) {addPlacement(key);return;}
    if (key === 'results') {show('results');return;}
    if (key === 'outcome') {
      outcomeKey = value;
      renderOutcome(outcomeKey);
      find('outcome').showModal();
      return;
    }
    if (key === 'open-outreach') {
      const record = records.get(value);
      active = record.icp;
      selected = record.candidate.id;
      if (record.editorialQuote) quoteModes.add(active + ':' + selected);
      else quoteModes.delete(active + ':' + selected);
      find('outcome').close();
      show('contact');
      return;
    }
    if (key === 'quote-mode') {
      const modeKey = active + ':' + selected;
      if (!quoteModes.delete(modeKey)) quoteModes.add(modeKey);
      show('contact');
      return;
    }
    const fromOutcome = find('outcome').open;
    const rec = fromOutcome ? records.get(outcomeKey) : state();
    if (key === 'send') {
      if (!find('draft').value.trim() || !find('subject').value.trim()) {
        const input = find('draft').value.trim() ? find('subject') : find('draft');
        input.setCustomValidity('Enter text before sending.');
        input.reportValidity();
        input.addEventListener('input',() => input.setCustomValidity(''),{once:true});
        return;
      }
      rec.channel = value;
      rec.subject = find('subject').value;
      rec.draft = find('draft').value;
      rec.stage = 'sent';
      rec.sentAt = Date.now();
      rec.followUpAt = rec.sentAt + 7 * 86400000;
      rec.events.push(value === 'email' ? 'Demo Gmail send recorded. Follow-up due in seven days.' : 'Owner logged the demo send. Follow-up due in seven days.');
    }
    if (key === 'reply' || key === 'sync') {
      const reply = key === 'sync' ? 'Thanks for the idea. Please send a short outline and confirm what you would need from our team.' : find('reply').value.trim();
      if (!reply) {find('reply-error').textContent = 'Paste the reply before saving.';return;}
      rec.reply = reply;
      rec.quote = find('rate').value.trim();
      rec.stage = 'replied';
      rec.followUpAt = null;
      rec.events.push((key === 'sync' ? 'Demo Gmail reply synced.' : 'Reply logged by owner.') + ' Pending follow-up canceled.');
    }
    if (key === 'optout') {rec.stage = 'optedOut';rec.followUpAt = null;rec.events.push('Opt-out logged. Pending follow-up canceled.');}
    if (key === 'decline') {rec.stage = 'declined';rec.followUpAt = null;rec.events.push('Decline logged. Pending follow-up canceled.');}
    if (key === 'book') {
      rec.stage = 'booked';
      if (!quoteMode()) rec.token = crypto.randomUUID().replaceAll('-','');
      rec.events.push(quoteMode() ? 'Demo editorial quote confirmed.' : 'Demo booking confirmed. Placement link created.');
    }
    if (key === 'publish') {
      const url = value === 'demo' ? 'demo' : find('published').value.trim();
      if (url !== 'demo') {
        try {if (new URL(url).protocol !== 'https:') throw new Error();}
        catch {find('publish-error').textContent = 'Enter the full HTTPS publication URL.';return;}
      }
      rec.publishedUrl = url;
      rec.stage = 'published';
      rec.events.push('Publication logged. Thank-you and results recap queued.');
    }
    if (['valid','duplicate','altered'].includes(key) && !rec.tests.includes(key)) rec.tests.push(key);
    if (key === 'recap') {rec.recap = true;rec.events.push('Results recap logged. Relationship stays on topic watch.');}
    rec.updatedAt = Date.now();
    if (fromOutcome) {
      renderResults();
      renderOutcome(outcomeKey);
      const buttons = [...find('outcome').querySelectorAll('[data-action]')];
      (buttons.find(next => next.dataset.action === key) || buttons[0])?.focus();
      return;
    }
    show(page);
  });
  renderLibrary();
  seedDashboard();
  show('icps');
})();
