export type PrevalenceBand = "Ultra-Orphan" | "Rare" | "Uncommon" | "Common" | "Widespread";

export type ExternalSource = {
  title: string;
  url?: string;
};

export type DrugRegions = Record<string, string[]>;

export type KeyCompany = {
  url?: string;
  drugs?: string[];
};

export type GuidelineDrug = {
  modality?: string;
  company?: string;
};

export type ConvokeImmunologyRecord = {
  id: string;
  name: string;
  description?: string;
  category: "Immunology";
  therapeuticArea: "Immunology";
  prevalence: PrevalenceBand;
  unmetNeedIndex: number;
  keyUnmetNeeds?: string;
  wikipediaUrl?: string;
  medlineUrl?: string;
  opentargetsUrl?: string;
  omimUrl?: string;
  nordUrl?: string;
  clinicalTrialsUrl?: string;
  leadingPagWebsiteUs?: string;
  pagUrls?: ExternalSource[];
  sources?: ExternalSource[];
  approvedDrugs?: DrugRegions;
  keyCompanies?: Record<string, KeyCompany>;
  guidelineDrugs?: Record<string, GuidelineDrug>;
  pipelineActivity: number;
  scores: {
    burdenUntreated: number;
    burdenTreated: number;
    safetyTolerability: number;
    convenienceAdministration: number;
  };
};

export const SOURCE_URL = "https://insights.convoke.bio/unmet-needs?ta=immunology";
export const SOURCE_RECORDS_API = "https://insights.convoke.bio/unmet-needs/api/records";
export const SOURCE_RECORD_COUNT = 2443;
export const IMMUNOLOGY_RECORD_COUNT = 38;
export const SOURCE_IMMUNOLOGY_RECORD_COUNT = 99;

export const indications: ConvokeImmunologyRecord[] = [
  {
    "id": "graft-versus-host-disease",
    "name": "Graft-versus-host disease",
    "description": "Graft versus host disease is a potentially life threatening complication of allogeneic stem cell or bone marrow transplant in which donor immune cells attack the recipient, causing early skin rash, gastrointestinal diarrhea, and liver injury. High dose steroids remain first line but only about half respond and immunosuppression drives serious infections. Many patients with chronic disease require prolonged multi line therapy, often becoming steroid resistant or dependent, while a subset develops progressive fibrosis such as sclerodermatous skin disease and bronchiolitis obliterans syndrome with lung outcomes that have not improved in decades.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 4.409,
    "keyUnmetNeeds": "- Durable, infection-sparing control for steroid-refractory grade II–IV acute GVHD, improving on ruxolitinib durability benchmarks\n- Steroid-sparing options for moderate-to-severe chronic GVHD that enable successful taper to steroid-free control with symptom/QoL improvement\n- Organ-restorative/anti-fibrotic therapies for fibrotic cGVHD (e.g., pulmonary BOS, deep cutaneous sclerosis) that deliver measurable organ-function gains (e.g., FEV1 improvement)",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Graft-versus-host_disease",
    "medlineUrl": "https://medlineplus.gov/ency/article/001309.htm",
    "opentargetsUrl": "https://platform.opentargets.org/disease/MONDO_0013730",
    "omimUrl": "https://www.omim.org/entry/614395",
    "nordUrl": "https://rarediseases.org/rare-diseases/graft-versus-host-disease/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Graft-versus-host%20disease",
    "leadingPagWebsiteUs": "https://bmtinfonet.org/",
    "keyCompanies": {
      "Incyte": {
        "url": "https://incyte.com/what-we-do/pharmaceutical-portfolio",
        "drugs": [
          "Jakafi (ruxolitinib)",
          "Niktimvo (axatilimab-csfr)"
        ]
      },
      "Sanofi": {
        "url": "https://www.sanofi.com/en/our-science/our-pipeline",
        "drugs": [
          "Rezurock (belumosudil)"
        ]
      },
      "Syndax": {
        "url": "https://syndax.com/pipeline/",
        "drugs": [
          "axatilimab"
        ]
      },
      "MaaT Pharma": {
        "url": "https://www.maatpharma.com/pipeline/",
        "drugs": [
          "Xervyteg (MaaT013)"
        ]
      },
      "Bristol Myers Squibb": {
        "url": "https://www.bms.com/researchers-and-partners/in-the-pipeline.html",
        "drugs": [
          "Orencia (abatacept)"
        ]
      }
    },
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Tacrolimus": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Jakafi (Ruxolitinib)": {
        "modality": "SM",
        "company": "Incyte"
      }
    },
    "pipelineActivity": 5,
    "scores": {
      "burdenUntreated": 6,
      "burdenTreated": 5,
      "safetyTolerability": 6,
      "convenienceAdministration": 5
    }
  },
  {
    "id": "dermatomyositis",
    "name": "Dermatomyositis",
    "description": "Rare immune mediated inflammatory myopathy typically starting in late midlife, more common in women, with a hallmark heliotrope or knuckle rash and subacute symmetric proximal muscle weakness. About one third develop interstitial lung disease and adults have a strong malignancy association requiring cancer screening. Care still relies on systemic glucocorticoids with immunosuppressants and escalation to options like intravenous immunoglobulin, but steroid toxicity and refractory disease remain common. The most acute unmet need is rapidly progressive interstitial lung disease, where 6 month mortality can stay 50 to 70 percent despite aggressive immunosuppression.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 3.475,
    "keyUnmetNeeds": "- Anti‑MDA5 dermatomyositis with rapidly progressive ILD: therapies that prevent early respiratory failure and reduce the ~50% early-mortality phenotype.\n- Steroid‑sparing control: durable remission/low disease activity without prolonged oral glucocorticoids and their complications/iatrogenic myopathy.\n- IVIG-refractory alternative: achieve “moderate” clinical improvement (e.g., TIS ≥40/100 with MMT‑8/CDASI gains) with less cost/access burden, clotting risk, and infusion time than IVIG.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Dermatomyositis",
    "medlineUrl": "https://medlineplus.gov/ency/article/000839.htm",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0000398",
    "omimUrl": "https://omim.org/entry/160750",
    "nordUrl": "https://rarediseases.org/rare-diseases/dermatomyositis/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Dermatomyositis",
    "leadingPagWebsiteUs": "https://www.myositis.org/",
    "keyCompanies": {
      "Priovant": {
        "url": "http://priovanttx.com/pipeline.html",
        "drugs": [
          "brepocitinib"
        ]
      },
      "Pfizer": {
        "url": "https://www.pfizer.com/science/drug-product-pipeline?tab=all&field_type_value=All",
        "drugs": [
          "dazukibart (PF-06823859)"
        ]
      },
      "AstraZeneca": {
        "url": "https://www.astrazeneca.com/our-therapy-areas/pipeline.html",
        "drugs": [
          "anifrolumab (Saphnelo)"
        ]
      },
      "argenx": {
        "url": "https://argenx.com/pipeline?page=1",
        "drugs": [
          "efgartigimod SC (efgartigimod alfa + hyaluronidase; efgartigimod PH20 SC)"
        ]
      }
    },
    "guidelineDrugs": {
      "Prednisolone": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Intravenous Immunoglobulin": {
        "modality": "AB"
      }
    },
    "pipelineActivity": 4,
    "scores": {
      "burdenUntreated": 5,
      "burdenTreated": 3,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "adult-onset-still-s-disease",
    "name": "Adult-onset Still's disease",
    "description": "Adult-onset Still’s disease is a rare immune-mediated systemic inflammatory disorder in younger adults marked by daily high-spiking fevers, sore throat, a salmon-pink rash, and arthritis that can become chronic and joint destructive. Treatment often depends on glucocorticoids plus immunosuppressants and injectable or infused biologics targeting interleukin 1 or interleukin 6, but durable steroid-sparing control and convenient options for persistent arthritis remain gaps. A critical unmet need is rapid, reliable rescue for macrophage activation syndrome, a potentially life-threatening hyperinflammatory complication.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 2.977,
    "keyUnmetNeeds": "- Glucocorticoid-free (or very low-dose) treat-to-target control of systemic flares/remission to avoid prolonged high-dose steroid exposure\n- Oral/less-burdensome options for the articular phenotype (persistent/chronic arthritis with joint-damage risk), especially after IL-1/IL-6 biologic failure/intolerance\n- Therapies to prevent and/or rapidly treat macrophage activation syndrome (MAS) to reduce mortality and avoid multi-agent high-dose immunosuppression",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Adult-onset_Still%27s_disease",
    "medlineUrl": "https://medlineplus.gov/ency/article/000450.htm",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0007135",
    "omimUrl": "https://omim.org/entry/604302",
    "nordUrl": "https://rarediseases.org/rare-diseases/adult-onset-stills-disease/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Adult-onset%20Still%27s%20disease",
    "leadingPagWebsiteUs": "https://www.aiarthritis.org/stillsdisease",
    "keyCompanies": {
      "Novartis": {
        "url": "https://www.novartis.com/research-development/novartis-pipeline",
        "drugs": [
          "Canakinumab (Ilaris)"
        ]
      },
      "Sobi": {
        "url": "https://www.sobi.com/en/pipeline",
        "drugs": [
          "Anakinra (Kineret)",
          "Emapalumab (Gamifant)"
        ]
      }
    },
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Kineret (Anakinra)": {
        "modality": "OTH",
        "company": "Swedish Orphan Biovitrum (Sobi)"
      },
      "Actemra (Tocilizumab)": {
        "modality": "AB",
        "company": "Genentech (Roche)"
      },
      "Ilaris (Canakinumab)": {
        "modality": "AB",
        "company": "Novartis"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 4,
      "burdenTreated": 2,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "scleroderma-limited",
    "name": "Scleroderma | limited",
    "description": "Limited cutaneous systemic sclerosis (CREST) is an autoimmune small vessel and collagen driven fibrotic disease, typically in midlife women, marked by Raynaud phenomenon, distal skin tightening, calcinosis, telangiectasia, and esophageal dysmotility. Care is largely organ based and symptomatic because there is no proven disease modifying therapy. Key unmet needs include preventing and healing ischemic digital ulcers, addressing painful calcinosis without an effective medical option, and improving gastrointestinal motility beyond reflux focused supportive care.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 3.114,
    "keyUnmetNeeds": "- Reduce new ischemic digital ulcers and speed healing (with pain/hand-function benefit) in lcSSc patients with Raynaud’s inadequately controlled on first-line dihydropyridine CCBs.\n- Improve esophageal motility and dysphagia (not just reflux) in SSc patients requiring escalated/long-term PPIs.\n- Medical (non-surgical) therapy to reduce calcinosis cutis burden and related pain/ulceration/hand dysfunction in CREST/lcSSc.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/CREST_syndrome",
    "medlineUrl": "https://medlineplus.gov/ency/article/000429.htm",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_1001017",
    "omimUrl": "https://omim.org/entry/181750",
    "nordUrl": "https://rarediseases.org/rare-diseases/systemic-scleroderma/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Limited%20Scleroderma%20OR%20Limited%20Cutaneous%20Systemic%20Sclerosis%20OR%20CREST%20Syndrome",
    "leadingPagWebsiteUs": "https://scleroderma.org/",
    "keyCompanies": {
      "AstraZeneca": {
        "url": "https://www.astrazeneca.com/our-therapy-areas/pipeline.html",
        "drugs": [
          "Anifrolumab"
        ]
      },
      "Boehringer Ingelheim": {
        "url": "https://www.boehringer-ingelheim.com/science-innovation/human-health-innovation/clinical-pipeline",
        "drugs": [
          "Nerandomilast (BI 1015550)"
        ]
      },
      "Bristol Myers Squibb": {
        "url": "https://www.bms.com/researchers-and-partners/in-the-pipeline.html",
        "drugs": [
          "BMS-986353 (zolacaptagene autoleucel, zola-cel)"
        ]
      },
      "BIOCAD": {
        "url": "https://ct.biocad.ru/en/molecules",
        "drugs": [
          "Divozilimab"
        ]
      }
    },
    "guidelineDrugs": {
      "Nifedipine": {
        "modality": "SM"
      },
      "Omeprazole": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Bosentan": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 6,
    "scores": {
      "burdenUntreated": 3,
      "burdenTreated": 2,
      "safetyTolerability": 4,
      "convenienceAdministration": 3
    }
  },
  {
    "id": "polymyositis",
    "name": "Polymyositis",
    "description": "Polymyositis is an uncommon autoimmune inflammatory myopathy causing slowly progressive symmetric proximal muscle weakness, often in women aged 45 to 60. Dysphagia and respiratory muscle involvement can be life threatening through aspiration pneumonia and respiratory failure. Treatment still hinges on prolonged high dose corticosteroids with slow tapers and escalation such as intravenous immunoglobulin for refractory disease, creating a need for safer steroid sparing options that deliver durable strength recovery and better control of bulbar and respiratory complications.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 3.472,
    "keyUnmetNeeds": "- Steroid-sparing control with durable strength/function gains that enables faster prednisone taper than ~9–12 months with less monitoring burden\n- Targeted prevention/treatment of bulbar and respiratory muscle involvement (dysphagia/aspiration risk; respiratory failure risk)\n- Convenient non-IV alternatives for refractory/steroid-resistant patients currently escalated to repeated monthly multi-day IVIG courses",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Polymyositis",
    "medlineUrl": "https://medlineplus.gov/ency/article/000428.htm",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0003063",
    "omimUrl": "https://omim.org/entry/160750",
    "nordUrl": "https://rarediseases.org/rare-diseases/polymyositis/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Polymyositis",
    "leadingPagWebsiteUs": "https://www.myositis.org/",
    "keyCompanies": {
      "AstraZeneca": {
        "url": "https://www.astrazeneca.com/our-therapy-areas/pipeline.html",
        "drugs": [
          "Anifrolumab"
        ]
      },
      "Pfizer": {
        "url": "https://www.pfizer.com/science/drug-product-pipeline",
        "drugs": [
          "Dazukibart (PF-06823859)"
        ]
      },
      "argenx": {
        "url": "https://www.us.argenx.com/pipeline",
        "drugs": [
          "Efgartigimod PH20 SC"
        ]
      },
      "Cabaletta Bio": {
        "url": "https://www.cabalettabio.com/pipeline",
        "drugs": [
          "CABA-201",
          "rese-cel"
        ]
      }
    },
    "guidelineDrugs": {
      "Prednisolone": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Intravenous Immunoglobulin": {
        "modality": "AB"
      }
    },
    "pipelineActivity": 5,
    "scores": {
      "burdenUntreated": 5,
      "burdenTreated": 3,
      "safetyTolerability": 5,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "juvenile-idiopathic-arthritis",
    "name": "Juvenile idiopathic arthritis",
    "description": "Juvenile idiopathic arthritis is a childhood autoimmune arthritis causing chronic joint pain, swelling, stiffness and limping, often starting before age 16 with a common toddler onset affecting knees and ankles. Beyond joint damage, silent uveitis is a major risk and can progress to vision loss without long term screening. Treatment escalates from nonsteroidal anti-inflammatory drugs to disease modifying immunosuppression, but long term corticosteroids are poorly suited in children due to bone and growth toxicity, leaving unmet need for steroid sparing control of arthritis and uveitis and more durable remission.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 2.866,
    "keyUnmetNeeds": "- Steroid-sparing prevention/control of chronic anterior uveitis in high-risk (ANA+, early-onset) JIA\n- More durable inactive-disease/remission therapies to reduce flares and prevent joint damage + growth abnormalities in persistent JIA\n- Better-tolerated, lower-risk systemic options (ideally oral/low-burden) to replace/augment MTX and reduce reliance on TNF-blockers in children unable to tolerate or safely remain on them",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Juvenile_idiopathic_arthritis",
    "medlineUrl": "https://medlineplus.gov/juvenilearthritis.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0002609",
    "omimUrl": "https://omim.org/entry/604302",
    "nordUrl": "https://rarediseases.org/mondo-disease/unspecified-juvenile-idiopathic-arthritis/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Juvenile%20Idiopathic%20Arthritis",
    "leadingPagWebsiteUs": "https://www.arthritis.org/",
    "keyCompanies": {
      "AbbVie": {
        "url": "https://www.abbvie.com/science/pipeline.html",
        "drugs": [
          "Upadacitinib",
          "Risankizumab",
          "Adalimumab"
        ]
      },
      "Eli Lilly": {
        "url": "https://www.lilly.com/science/research-development/pipeline",
        "drugs": [
          "Baricitinib",
          "Ixekizumab"
        ]
      },
      "Bristol Myers Squibb": {
        "url": "https://www.bms.com/researchers-and-partners/in-the-pipeline.html",
        "drugs": [
          "Deucravacitinib"
        ]
      },
      "UCB": {
        "url": "https://www.ucb.com/innovation/pipeline",
        "drugs": [
          "Bimekizumab",
          "Certolizumab pegol"
        ]
      },
      "Johnson & Johnson": {
        "url": "https://www.investor.jnj.com/pipeline/development-pipeline/default.aspx",
        "drugs": [
          "Ustekinumab",
          "Guselkumab"
        ]
      },
      "Amgen": {
        "url": "https://www.amgenpipeline.com/",
        "drugs": [
          "Apremilast"
        ]
      },
      "Sobi": {
        "url": "https://www.sobi.com/en/pipeline",
        "drugs": [
          "Anakinra"
        ]
      },
      "Novartis": {
        "url": "https://www.novartis.com/research-development/novartis-pipeline",
        "drugs": [
          "Secukinumab",
          "Canakinumab"
        ]
      }
    },
    "guidelineDrugs": {
      "Naproxen": {
        "modality": "SM"
      },
      "Triamcinolone Acetonide": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Humira (Adalimumab)": {
        "modality": "AB",
        "company": "AbbVie"
      },
      "Enbrel (Etanercept)": {
        "modality": "OTH",
        "company": "Amgen"
      }
    },
    "pipelineActivity": 3,
    "scores": {
      "burdenUntreated": 3,
      "burdenTreated": 2,
      "safetyTolerability": 3,
      "convenienceAdministration": 3
    }
  },
  {
    "id": "antisynthetase-syndrome",
    "name": "Antisynthetase syndrome",
    "description": "Antisynthetase syndrome is a rare, female-predominant chronic autoimmune disease driven by autoantibodies to aminoacyl transfer RNA synthetases, causing multisystem inflammation with myositis, inflammatory arthritis, Raynaud phenomenon, cracked thickened hands, and often severe, rapidly progressive interstitial lung disease that may be the first or only presentation with exertional shortness of breath and dry cough. Treatment relies on early high-dose prednisone plus additional immunosuppression, but relapse and flares are common during steroid tapering, leaving a major unmet need for durable steroid-sparing control that preserves lung function while controlling muscle and joint disease.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 3.621,
    "keyUnmetNeeds": "- Prevent/slow ASyS‑ILD progression to progressive pulmonary fibrosis and oxygen dependence (e.g., improved FVC/DLCO, HRCT outcomes)\n- Single agent that effectively treats ILD + myositis + polyarthritis (multi‑manifestation disease control)\n- Durable steroid‑sparing disease control enabling safe tapering (e.g., prednisone ≤7.5 mg/day) with fewer flares/relapses",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Antisynthetase_syndrome",
    "medlineUrl": "https://rarediseases.info.nih.gov/diseases/735/antisynthetase-syndrome",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_1001982",
    "omimUrl": "https://omim.org/entry/160750",
    "nordUrl": "https://rarediseases.org/rare-diseases/antisynthetase-syndrome",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Antisynthetase%20Syndrome",
    "leadingPagWebsiteUs": "https://www.myositis.org/",
    "keyCompanies": {
      "argenx": {
        "url": "https://www.us.argenx.com/pipeline",
        "drugs": [
          "efgartigimod PH20 SC (ALKIVIA)"
        ]
      },
      "Cabaletta Bio": {
        "url": "https://www.cabalettabio.com/pipeline",
        "drugs": [
          "rese-cel (resecabtagene autoleucel; formerly CABA-201)"
        ]
      },
      "Cartesian Therapeutics": {
        "url": "https://www.cartesiantherapeutics.com/pipeline/",
        "drugs": [
          "Descartes-08"
        ]
      }
    },
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Tacrolimus": {
        "modality": "SM"
      },
      "Rituximab": {
        "modality": "AB"
      }
    },
    "pipelineActivity": 6,
    "scores": {
      "burdenUntreated": 4,
      "burdenTreated": 3,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "igg4-related-disease",
    "name": "IgG4-related disease",
    "description": "Immunoglobulin G4 related disease is a rare chronic immune mediated fibroinflammatory syndrome that causes tumor like inflammatory masses and progressive fibrosis, often across multiple organs such as the pancreas, kidneys, salivary glands, and retroperitoneum. It commonly mimics other conditions, delaying diagnosis until organ injury is established. Glucocorticoids can induce rapid improvement, but relapse during tapering is frequent and long term steroid toxicity is a major burden. Because established fibrotic damage can be irreversible, there is strong unmet need for earlier recognition, safer steroid sparing maintenance, and therapies that prevent progression and preserve organ function.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 3.063,
    "keyUnmetNeeds": "- Steroid-sparing maintenance that prevents relapse/flares during and after taper (improve Week-52 time-to-first treated/adjudicated flare; flare-free, treatment-free complete remission)\n- Anti-fibrotic/organ-protective control to halt progression to irreversible fibrosis and organ failure\n- Non-steroidal, safer long-term therapies with easier chronic administration vs glucocorticoids and B-cell depletion (lower toxicity/infection risk; enable at-home/SC dosing vs IV)",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/IgG4-related_disease",
    "medlineUrl": "https://medlineplus.gov/druginfo/meds/a625074.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/MONDO_0017287",
    "nordUrl": "https://rarediseases.org/mondo-disease/igg4-related-disease/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=IgG4-Related%20Disease",
    "leadingPagWebsiteUs": "https://igg4ward.org/",
    "keyCompanies": {
      "Amgen": {
        "url": "https://www.amgenpipeline.com/",
        "drugs": [
          "UPLIZNA (inebilizumab-cdon)"
        ]
      },
      "Sanofi": {
        "url": "https://www.sanofi.com/en/our-science/our-pipeline",
        "drugs": [
          "rilzabrutinib (Wayrilz, SAR444671)"
        ]
      },
      "Zenas BioPharma": {
        "url": "https://zenasbio.com/our-science/pipeline/",
        "drugs": [
          "obexelimab"
        ]
      }
    },
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Uplizna (Inebilizumab-Cdon)": {
        "modality": "AB",
        "company": "Amgen"
      },
      "Rituximab": {
        "modality": "AB"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 6,
    "scores": {
      "burdenUntreated": 4,
      "burdenTreated": 2,
      "safetyTolerability": 5,
      "convenienceAdministration": 3
    }
  },
  {
    "id": "scleroderma-systemic",
    "name": "Scleroderma | systemic",
    "description": "Systemic sclerosis is an autoimmune disease marked by progressive collagen driven fibrosis that scars skin and internal organs, often starting with Raynaud phenomenon and puffy fingers that progress to skin thickening, alongside frequent reflux and dysphagia and sometimes silent but deadly lung involvement. Care is still largely organ by organ because no therapy reliably modifies the underlying disease course, and key complications such as interstitial lung disease and ischemic digital ulcers remain major drivers of morbidity and disability. Current antifibrotic options can be limited by tolerability, keeping demand high for safer, truly disease modifying approaches.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 4.025,
    "keyUnmetNeeds": "- Predictable, disease-modifying anti-fibrotic therapy for early diffuse cutaneous SSc with consistent clinically meaningful mRSS improvement beyond variable immunosuppressant response\n- Better-tolerated SSc-ILD therapy that halts/meaningfully further slows FVC decline while avoiding nintedanib-like GI toxicity to support long-term use\n- Vasculopathy-targeted therapy that prevents new and accelerates healing of ischemic digital ulcers, especially in severe digital fibrosis with poor healing",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Systemic_scleroderma",
    "medlineUrl": "https://medlineplus.gov/scleroderma.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_1001993",
    "omimUrl": "https://omim.org/entry/181750",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Systemic%20Sclerosis",
    "leadingPagWebsiteUs": "https://scleroderma.org/",
    "keyCompanies": {
      "Boehringer Ingelheim": {
        "url": "https://www.boehringer-ingelheim.com/science-innovation/human-health-innovation/clinical-pipeline",
        "drugs": [
          "Nerandomilast (BI 1015550)",
          "Nintedanib (Ofev)"
        ]
      },
      "AstraZeneca": {
        "url": "https://www.astrazeneca.com/our-therapy-areas/pipeline.html",
        "drugs": [
          "Anifrolumab (Saphnelo)"
        ]
      },
      "Bristol Myers Squibb": {
        "url": "https://www.bms.com/researchers-and-partners/in-the-pipeline.html",
        "drugs": [
          "BMS-986353 (zolacaptagene autoleucel; zola-cel)"
        ]
      },
      "GSK": {
        "url": "https://www.gsk.com/en-gb/innovation/pipeline/",
        "drugs": [
          "Belimumab (Benlysta)"
        ]
      },
      "Roche": {
        "url": "https://www.roche.com/solutions/pipeline",
        "drugs": [
          "Tocilizumab (Actemra/RoActemra)"
        ]
      }
    },
    "guidelineDrugs": {
      "Nifedipine": {
        "modality": "SM"
      },
      "Sildenafil": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Nintedanib": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 3,
    "scores": {
      "burdenUntreated": 5,
      "burdenTreated": 4,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "iga-vasculitis",
    "name": "IgA vasculitis",
    "description": "IgA vasculitis is an immune mediated small vessel vasculitis, usually in children after an upper respiratory infection, causing palpable purpura with joint and abdominal pain and sometimes kidney inflammation with hematuria or proteinuria. Most cases self resolve, but nephritis is the long term threat and current management leans on corticosteroids and other immunosuppressants with meaningful side effects. The clinical premium is steroid sparing, mechanism based therapy that reduces proteinuria and preserves kidney function, including kidney directed anti inflammatory approaches and targeting complement and B cell pathways.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 2.007,
    "keyUnmetNeeds": "- Terminal-complement (C5) blockade for IgA vasculitis nephritis (IgAVN) to reduce proteinuria/UPCR and preserve eGFR vs broad immunosuppression.\n- Once-daily oral, steroid-sparing renoprotection to achieve durable proteinuria remission in pediatric IgAV with proteinuric glomerular disease.\n- Disease-modifying therapy that reduces pathogenic IgA immune-complex formation in IgAVN (e.g., BLyS/APRIL pathway inhibition) with renal proteinuria endpoints.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Henoch%E2%80%93Sch%C3%B6nlein_purpura",
    "medlineUrl": "https://medlineplus.gov/ency/article/000425.htm",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_1000965",
    "nordUrl": "https://rarediseases.org/rare-diseases/henoch-schonlein-purpura/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=IgA%20Vasculitis",
    "leadingPagWebsiteUs": "https://vasculitisfoundation.org/",
    "keyCompanies": {
      "AstraZeneca": {
        "url": "https://www.astrazeneca.com/our-therapy-areas/pipeline.html",
        "drugs": [
          "Ravulizumab (ULTOMIRIS)"
        ]
      },
      "RemeGen": {
        "url": "https://www.remegen.com/?v=listing&cid=92",
        "drugs": [
          "Telitacicept (RC18)"
        ]
      }
    },
    "guidelineDrugs": {
      "Prednisolone": {
        "modality": "SM"
      },
      "Methylprednisolone": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Cyclophosphamide": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 6,
    "scores": {
      "burdenUntreated": 2,
      "burdenTreated": 1,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "kawasaki-disease",
    "name": "Kawasaki disease",
    "description": "Kawasaki disease is an acute inflammatory vasculitis in infants and young children, presenting with at least 5 days of high fever and mucocutaneous signs. The main clinical urgency is preventing coronary artery inflammation and aneurysms, which can create lifelong cardiovascular risk. Standard first line intravenous immunoglobulin plus aspirin reduces but does not eliminate coronary complications, and 10 to 20 percent of children are refractory, often requiring repeat intravenous immunoglobulin with safety and logistical burdens including dose dependent hemolytic anemia. Key unmet needs include better early risk stratification and faster, more targeted rescue therapies.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 2.278,
    "keyUnmetNeeds": "- Upfront IVIG + adjunct anti-inflammatory therapy for children identified at diagnosis as high risk for coronary artery aneurysm (CAA), to further reduce CAA vs IVIG alone.\n- Rapid “rescue” therapy for IVIG-resistant Kawasaki disease (~10–20% with persistent/recrudescent fever after IVIG) to stop fever quickly and lower subsequent CAA risk.\n- Second-line alternative to repeat IVIG that lowers hemolysis risk and care burden (e.g., less hemolytic anemia, shorter infusion/hospital stay).",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Kawasaki_disease",
    "medlineUrl": "https://medlineplus.gov/kawasakidisease.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0004246",
    "omimUrl": "https://omim.org/entry/611775",
    "nordUrl": "https://rarediseases.org/rare-diseases/kawasaki-disease/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Kawasaki%20Disease",
    "leadingPagWebsiteUs": "https://kdfoundation.org/",
    "keyCompanies": {
      "Sobi": {
        "url": "https://www.sobi.com/en/pipeline",
        "drugs": [
          "Anakinra (Kineret)"
        ]
      },
      "Bayer": {
        "url": "https://www.bayer.com/en/pharma/development-pipeline",
        "drugs": [
          "Rivaroxaban (Xarelto)"
        ]
      }
    },
    "guidelineDrugs": {
      "Intravenous Immune Globulin": {
        "modality": "AB"
      },
      "Aspirin": {
        "modality": "SM"
      },
      "Methylprednisolone": {
        "modality": "SM"
      },
      "Infliximab": {
        "modality": "AB"
      },
      "Warfarin": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 3,
      "burdenTreated": 2,
      "safetyTolerability": 3,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "sapho-syndrome",
    "name": "SAPHO syndrome",
    "description": "SAPHO syndrome is a rare inflammatory disorder linking painful sterile bone and joint inflammation with skin disease, typically anterior chest wall and sternoclavicular arthritis alongside palmoplantar pustulosis or severe acne. It is often misdiagnosed as infection, driving delayed, burdensome workups. With no randomized trials and no agreed standard of care, patients cycle through off label anti inflammatories, immunomodulators, bisphosphonates, and biologics with variable benefit, and treatments that relieve bone pain can worsen skin disease, leaving a major need for reliable diagnosis and disease modifying, dual skin and bone control.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 3.721,
    "keyUnmetNeeds": "- RCT-validated therapy for refractory osteoarticular SAPHO achieving ≥50% improvement in pain/global VAS in patients symptomatic despite NSAIDs/csDMARDs\n- Single agent that concurrently controls bone and skin disease (PPP/acne) without paradoxical cutaneous reactions\n- Safer, monitoring-light outpatient alternative to off-label regimens relying on chronic NSAIDs plus IV bisphosphonates and immunosuppressive DMARDs/biologics",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/SAPHO_syndrome",
    "medlineUrl": "https://rarediseases.info.nih.gov/diseases/7606/sapho-syndrome",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_1001164",
    "nordUrl": "https://rarediseases.org/mondo-disease/sapho-syndrome/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=%22SAPHO%20syndrome%22",
    "guidelineDrugs": {
      "Ibuprofen": {
        "modality": "SM"
      },
      "Pamidronate": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Sulfasalazine": {
        "modality": "SM"
      },
      "Adalimumab": {
        "modality": "AB"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 4,
      "burdenTreated": 3,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "sj-gren-syndrome",
    "name": "Sjögren syndrome",
    "description": "Sjögren’s is a chronic autoimmune disease, most often diagnosed in women ages 40 to 50, in which immune attack damages the tear and salivary glands causing dry eyes and dry mouth, often alongside profound fatigue and musculoskeletal pain. It can mimic other conditions and be overlooked, while some patients develop systemic complications including neuropathy, major organ involvement, and increased lymphoma risk. Care remains largely symptomatic with no cure and patients report persistent gaps in disease control, with 77.2% dissatisfied with prescription therapy in a 2023 to 2024 multinational survey.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Uncommon",
    "unmetNeedIndex": 3.107,
    "keyUnmetNeeds": "- Steroid-sparing systemic immunotherapies that meaningfully improve active systemic disease in moderate–severe patients (e.g., ESSDAI ≥5).\n- Therapies that reliably reduce high symptom burden (ESSPRI), especially fatigue and pain, even when systemic activity is controlled.\n- More convenient, better-tolerated sicca treatments vs current secretagogues/ocular drops (avoid QID/TID dosing, sweating-driven discontinuation, ocular burning).",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Sj%C3%B6gren%27s_disease",
    "medlineUrl": "https://medlineplus.gov/sjogrenssyndrome.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0000699",
    "omimUrl": "https://www.omim.org/entry/270150",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Sjogren%27s%20Syndrome",
    "leadingPagWebsiteUs": "https://sjogrens.org/",
    "keyCompanies": {
      "Novartis": {
        "url": "https://www.novartis.com/research-development/novartis-pipeline",
        "drugs": [
          "Ianalumab (VAY736)"
        ]
      },
      "Amgen": {
        "url": "https://www.amgenpipeline.com/",
        "drugs": [
          "Dazodalibep"
        ]
      },
      "Bristol Myers Squibb": {
        "url": "https://www.bms.com/researchers-and-partners/in-the-pipeline.html",
        "drugs": [
          "Deucravacitinib"
        ]
      },
      "argenx": {
        "url": "https://www.us.argenx.com/pipeline",
        "drugs": [
          "Efgartigimod",
          "Efgartigimod PH20 SC"
        ]
      },
      "Johnson & Johnson": {
        "url": "https://www.investor.jnj.com/pipeline/Innovative-Medicine-pipeline/default.aspx",
        "drugs": [
          "Nipocalimab"
        ]
      }
    },
    "guidelineDrugs": {
      "Pilocarpine": {
        "modality": "SM"
      },
      "Cevimeline": {
        "modality": "SM"
      },
      "Hydroxychloroquine": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Cyclosporine Ophthalmic Emulsion": {
        "modality": "PEP"
      }
    },
    "pipelineActivity": 4,
    "scores": {
      "burdenUntreated": 3,
      "burdenTreated": 2,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "takayasu-arteritis",
    "name": "Takayasu arteritis",
    "description": "Autoimmune large vessel vasculitis causing inflammation of the aorta and major branches, typically in young women, progressing from nonspecific symptoms to limb claudication, dizziness, blood pressure differences and weak pulses as ischemia and fixed stenosis develop. Care relies on high dose prednisone plus immunosuppression, yet relapses are common and vascular damage can be permanent. Key unmet needs are durable steroid sparing remission, reliable imaging based monitoring because blood markers can be normal despite active disease, and pregnancy compatible options that minimize glucocorticoid exposure and avoid teratogens.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 3.512,
    "keyUnmetNeeds": "- Glucocorticoid-free durable remission in refractory/relapsing Takayasu arteritis (including patients unable to taper below ~10 mg/day), targeting NIH inactive disease (≤1) with steroid discontinuation by ~6 months.\n- Prevent “silent” vascular progression despite clinical/biochemical quiescence, with no new/progressive arterial lesions on CTA/MRA/Doppler and reduced FDG-PET vascular hypermetabolism.\n- Pregnancy- and lactation-compatible steroid-sparing therapy for young female TAK patients that avoids teratogens (e.g., methotrexate/leflunomide/cyclophosphamide) while maintaining remission and minimizing high-dose prednisone exposure.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Takayasu%27s_arteritis",
    "medlineUrl": "https://medlineplus.gov/ency/article/001250.htm",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_1001857",
    "omimUrl": "https://www.omim.org/entry/207600",
    "nordUrl": "https://rarediseases.org/rare-diseases/arteritis-takayasu/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Takayasu%20Arteritis",
    "leadingPagWebsiteUs": "https://vasculitisfoundation.org/",
    "keyCompanies": {
      "AbbVie": {
        "url": "https://www.abbvie.com/science/pipeline.html",
        "drugs": [
          "upadacitinib (RINVOQ, ABT-494)"
        ]
      },
      "Chugai": {
        "url": "https://www.chugai-pharm.co.jp/english/ir/product/pipeline.html",
        "drugs": [
          "tocilizumab (Actemra)"
        ]
      }
    },
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Leflunomide": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 4,
      "burdenTreated": 3,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "hypersensitivity-vasculitis",
    "name": "Hypersensitivity vasculitis",
    "description": "Hypersensitivity vasculitis is a trigger driven immune small vessel vasculitis usually affecting adults, marked by lower leg palpable purpura with burning or itching and occasional systemic symptoms. It often starts 7 to 10 days after a new medication. While many cases are skin limited, relapsing or chronic courses are common and around 30 percent develop extracutaneous disease, raising concern for kidney and gastrointestinal involvement. Care is largely supportive and frequently relies on glucocorticoids despite toxicity, and commonly used steroid sparing agents lack strong randomized evidence, leaving a premium on faster control of severe flares and durable organ protective remission without chronic steroids.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 2.263,
    "keyUnmetNeeds": "- Steroid-sparing therapy for severe ulcerated/necrotic cutaneous disease with faster complete rash/ulcer resolution\n- Relapse-prevention / steroid-free remission for recurrent or chronic cutaneous LCV to reduce flare rates and cumulative prednisone harm\n- Organ-protective systemic therapy for extracutaneous involvement (~30%) to prevent renal/GI/pulmonary/neurologic complications and reduce mortality",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Cutaneous_small-vessel_vasculitis",
    "medlineUrl": "https://medlineplus.gov/ency/article/000874.htm",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_1000974",
    "omimUrl": "https://omim.org/entry/609817",
    "nordUrl": "https://rarediseases.org/rare-diseases/cutaneous-vasculitis/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=%22Hypersensitivity%20vasculitis%22%20OR%20%22Cutaneous%20small%20vessel%20vasculitis%22%20OR%20%22Leukocytoclastic%20vasculitis%22",
    "leadingPagWebsiteUs": "https://www.vasculitisfoundation.org/",
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Colchicine": {
        "modality": "SM"
      },
      "Dapsone": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 2,
      "burdenTreated": 1,
      "safetyTolerability": 3,
      "convenienceAdministration": 3
    }
  },
  {
    "id": "mixed-connective-tissue-disease",
    "name": "Mixed connective tissue disease",
    "description": "Rare systemic autoimmune overlap syndrome (lupus, scleroderma, inflammatory myositis), typically in midlife women, often starting with Raynaud phenomenon, puffy “sausage” fingers and inflammatory joint or muscle pain; morbidity and mortality are driven by progressive vasculopathy with pulmonary hypertension and interstitial lung disease. Management is symptom and organ directed immunosuppression and vasodilators with no cure, leaving major unmet need for disease modifying approaches that prevent pulmonary hypertension, halt lung scarring and avert digital ulcers and tissue loss.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 3.004,
    "keyUnmetNeeds": "- MCTD-specific PAH prevention/modification strategy for high-risk patients to improve long-term outcomes\n- Therapy for CT-confirmed MCTD-ILD that halts progression and preserves lung function (FVC/DLCO)\n- Vasculopathy-directed treatment for Raynaud’s to prevent digital ischemia (ulcers/digital necrosis) with measurable symptom benefit (RCS)",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Mixed_connective_tissue_disease",
    "medlineUrl": "https://medlineplus.gov/connectivetissuedisorders.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0007374",
    "nordUrl": "https://rarediseases.org/rare-diseases/mixed-connective-tissue-disease-mctd/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=%22Mixed+Connective+Tissue+Disease%22",
    "leadingPagWebsiteUs": "https://mctdfoundation.org/",
    "guidelineDrugs": {
      "Hydroxychloroquine": {
        "modality": "SM"
      },
      "Prednisone": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Nifedipine": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 3,
      "burdenTreated": 2,
      "safetyTolerability": 4,
      "convenienceAdministration": 3
    }
  },
  {
    "id": "reactive-arthritis",
    "name": "Reactive arthritis",
    "description": "Infection triggered inflammatory arthritis emerging 1 to 6 weeks after a gastrointestinal or genitourinary infection, typically affecting knees and ankles with possible sacroiliac, eye, and urinary inflammation. Many cases resolve in weeks to months, but a subset becomes chronic or recurrent, especially in HLA-B27 carriers. Current care is largely symptomatic and step up, and antibiotics do not improve outcomes once arthritis is established, leaving a need for therapies that shorten disease course and prevent chronicity.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Uncommon",
    "unmetNeedIndex": 3.395,
    "keyUnmetNeeds": "- Prevent chronic/recurrent reactive arthritis in high-risk patients (HLA‑B27+ and/or Chlamydia-triggered), including control of chronic axial/sacroiliac disease.\n- Develop curative anti-infective “anti-persistence” therapies for chronic Chlamydia-induced reactive arthritis (>6 months) where antibiotics don’t reliably clear arthritis.\n- Provide better-tolerated, evidence-backed options for NSAID failures to reduce reliance on immunosuppressive DMARD/TNF step-up therapy with unclear indications.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Reactive_arthritis",
    "medlineUrl": "https://medlineplus.gov/ency/article/000440.htm",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0007460",
    "omimUrl": "https://omim.org/entry/106300",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Reactive%20arthritis",
    "leadingPagWebsiteUs": "https://spondylitis.org/",
    "guidelineDrugs": {
      "Ibuprofen": {
        "modality": "SM"
      },
      "Naproxen": {
        "modality": "SM"
      },
      "Sulfasalazine": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Adalimumab": {
        "modality": "AB"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 3,
      "burdenTreated": 2,
      "safetyTolerability": 4,
      "convenienceAdministration": 3
    }
  },
  {
    "id": "palindromic-rheumatism",
    "name": "Palindromic rheumatism",
    "description": "Relapsing inflammatory arthritis with sudden, severe, unpredictable flares of painful swollen joints that resolve to normal between attacks without lasting damage; key unmet needs are evidence based disease modifying therapy to control attacks and prevent progression to rheumatoid arthritis, plus clearer diagnostic criteria and better understanding of underlying biology.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 3.249,
    "keyUnmetNeeds": "- Prevent progression to persistent rheumatoid arthritis in biomarker-high-risk palindromic rheumatism (RF+/anti-CCP+).\n- Rapid, reliable flare-abortive therapy for unpredictable, debilitating PR attacks with variable NSAID response.\n- Safer long-term flare prevention that reduces NSAID boxed-warning CV/GI risks and avoids hydroxychloroquine/DMARD monitoring burdens.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Palindromic_rheumatism",
    "medlineUrl": "https://medlineplus.gov/jointdisorders.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/MONDO_0001332",
    "nordUrl": "https://rarediseases.org/organizations/international-palindromic-rheumatism-society/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Palindromic%20rheumatism",
    "guidelineDrugs": {
      "Hydroxychloroquine": {
        "modality": "SM"
      },
      "Sulfasalazine": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Naproxen": {
        "modality": "SM"
      },
      "Ibuprofen": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 3,
      "burdenTreated": 2,
      "safetyTolerability": 3,
      "convenienceAdministration": 3
    }
  },
  {
    "id": "polyarteritis-nodosa",
    "name": "Polyarteritis nodosa",
    "description": "Polyarteritis nodosa is a very rare necrotizing vasculitis of small and medium arteries that causes aneurysms and occlusions, leading to subacute multi organ ischemic injury affecting kidneys, gut, skin, and nerves with systemic symptoms like fever, weight loss, abdominal pain, neuropathy, and hypertension. Care relies on prolonged high dose corticosteroids and in severe disease cyclophosphamide, but toxicity, intensive monitoring, and frequent relapse drive demand for safer steroid sparing, more durable treatments and better subtype targeted approaches.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 4.849,
    "keyUnmetNeeds": "- Safer, non-cytotoxic induction for newly diagnosed active severe systemic PAN to replace cyclophosphamide + high-dose glucocorticoids while reducing malignancy/infection risk.\n- Relapse-preventing maintenance that delivers durable multi-year remission (not only short-term control).\n- Lower-burden (home/outpatient-friendly) induction regimens that avoid frequent IV pulses and intensive lab monitoring.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Polyarteritis_nodosa",
    "medlineUrl": "https://medlineplus.gov/ency/article/001438.htm",
    "opentargetsUrl": "https://platform.opentargets.org/disease/MONDO_0019170",
    "omimUrl": "https://omim.org/entry/615688",
    "nordUrl": "https://rarediseases.org/rare-diseases/polyarteritis-nodosa/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Polyarteritis%20nodosa",
    "leadingPagWebsiteUs": "https://vasculitisfoundation.org/",
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Methylprednisolone": {
        "modality": "SM"
      },
      "Cyclophosphamide": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 7,
      "burdenTreated": 5,
      "safetyTolerability": 6,
      "convenienceAdministration": 5
    }
  },
  {
    "id": "giant-cell-arteritis",
    "name": "Giant cell arteritis",
    "description": "Giant cell arteritis is an immune driven vasculitis of medium and large arteries in adults over 50 that causes new headache, scalp tenderness and jaw claudication and can rapidly lead to blindness or stroke. Care still relies on immediate, prolonged high dose glucocorticoids often for 1 to 2 years with major toxicity and infection risk in the elderly and frequent relapse despite treatment. Steroid sparing control remains the core need, with biologics such as tocilizumab reducing but not eliminating steroid exposure and durable maintenance strategies still emerging.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Uncommon",
    "unmetNeedIndex": 4.429,
    "keyUnmetNeeds": "- Steroid-sparing (ideally steroid-minimising) regimens that maintain remission while materially reducing glucocorticoid toxicity.\n- Durable maintenance therapies that prevent relapse after stopping IL‑6R blockade (avoiding re-escalation to ~20 mg/day prednisolone), especially in patients with prior relapse on tocilizumab or large‑vessel involvement.\n- Rapid-acting therapies that prevent cranial ischaemic events (vision loss/stroke) during high-risk presentations/relapses while avoiding infection-risk tradeoffs of intensive IV steroid strategies in elderly patients.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Giant_cell_arteritis",
    "medlineUrl": "https://medlineplus.gov/giantcellarteritis.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_1001209",
    "omimUrl": "https://omim.org/entry/187360",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Giant%20Cell%20Arteritis",
    "leadingPagWebsiteUs": "https://vasculitisfoundation.org/",
    "keyCompanies": {
      "Roche": {
        "url": "https://www.roche.com/solutions/pipeline",
        "drugs": [
          "Tocilizumab (ACTEMRA/RoActemra)"
        ]
      },
      "AbbVie": {
        "url": "https://www.abbvie.com/science/pipeline.html",
        "drugs": [
          "Upadacitinib (RINVOQ)"
        ]
      },
      "Bristol Myers Squibb": {
        "url": "https://www.bms.com/researchers-and-partners/in-the-pipeline.html",
        "drugs": [
          "Abatacept (ORENCIA)"
        ]
      }
    },
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Methylprednisolone": {
        "modality": "SM"
      },
      "Tocilizumab": {
        "modality": "AB",
        "company": "Genentech"
      },
      "Methotrexate": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 5,
      "burdenTreated": 4,
      "safetyTolerability": 5,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "eosinophilic-granulomatosis-with-polyangiitis",
    "name": "Eosinophilic granulomatosis with polyangiitis",
    "description": "Eosinophilic granulomatosis with polyangiitis is a rare autoimmune small vessel vasculitis that often begins in adults with asthma or allergies and eosinophilia, then progresses to multisystem, organ damaging inflammation affecting lungs and sinuses as well as nerves, heart, and kidneys. Care still relies heavily on systemic corticosteroids and immunosuppression, yet relapses are common and cumulative steroid toxicity is a major burden. Key unmet needs are durable steroid sparing remission and proven options for severe organ threatening disease that is often underrepresented or excluded in clinical trials.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Ultra-Orphan",
    "unmetNeedIndex": 4.039,
    "keyUnmetNeeds": "- Durable, steroid-minimizing remission in relapsing/refractory EGPA (BVAS=0 with prednisone/prednisolone ≤4 mg/day, ideally steroid-free) and fewer relapses during/after taper.\n- Proven therapies for organ-/life-threatening EGPA manifestations (e.g., neuropathy, cardiomyopathy, glomerulonephritis/alveolar hemorrhage) where evidence is scarce/excluded from IL-5 trials.\n- Lower treatment burden vs current biologics (e.g., fewer injections/longer dosing intervals than mepolizumab’s 3 injections every 4 weeks).",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Eosinophilic_granulomatosis_with_polyangiitis",
    "medlineUrl": "https://medlineplus.gov/eosinophilicdisorders.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0007208",
    "nordUrl": "https://rarediseases.org/rare-diseases/churg-strauss-syndrome/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Eosinophilic%20granulomatosis%20with%20polyangiitis",
    "leadingPagWebsiteUs": "https://vasculitisfoundation.org/",
    "keyCompanies": {
      "GSK": {
        "url": "https://www.gsk.com/en-gb/innovation/pipeline/",
        "drugs": [
          "Depemokimab",
          "Mepolizumab (Nucala)"
        ]
      },
      "AstraZeneca": {
        "url": "https://www.astrazeneca.com/our-therapy-areas/pipeline.html",
        "drugs": [
          "Benralizumab (Fasenra)"
        ]
      },
      "Hengrui Pharma": {
        "url": "https://www.hengrui.com/en/pipeline.html",
        "drugs": [
          "SHR-1703"
        ]
      }
    },
    "guidelineDrugs": {
      "Nucala (Mepolizumab)": {
        "modality": "AB",
        "company": "GlaxoSmithKline"
      },
      "Prednisolone": {
        "modality": "SM"
      },
      "Cyclophosphamide": {
        "modality": "SM"
      },
      "Rituximab": {
        "modality": "AB"
      },
      "Azathioprine": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 6,
    "scores": {
      "burdenUntreated": 7,
      "burdenTreated": 4,
      "safetyTolerability": 6,
      "convenienceAdministration": 5
    }
  },
  {
    "id": "beh-et-s-disease",
    "name": "Behçet's Disease",
    "description": "Behçet’s disease is a rare, poorly understood inflammatory vasculitis, typically starting in adults in their 20s to 30s, marked by relapsing flares of painful oral and genital ulcers with eye and skin involvement. The central challenge is preventing irreversible organ damage such as vision loss from ocular inflammation and serious vascular events including thrombosis and aneurysms. With no cure, current immunosuppression and steroid based approaches often provide inconsistent control, can be disappointing for mucosal ulcers, and may not reliably protect against sight threatening disease.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 3.203,
    "keyUnmetNeeds": "- Self-administered (ideally topical/local) therapy for recurrent Behçet genital ulcers that rapidly achieves complete ulcer closure (“ulcer area of zero”) with meaningful pain reduction.\n- Steroid-sparing regimen for posterior-segment Behçet uveitis/retinal vasculitis that induces and maintains clinical + angiographic remission to prevent vision loss with less need for combination immunosuppression/anti‑TNF escalation.\n- Safer, relapse-preventing therapy for vascular Behçet (pulmonary/peripheral artery aneurysms, major venous thrombosis) achieving durable clinical/radiologic remission with reduced reliance on high-dose steroids and cyclophosphamide/anti‑TNF–intensive approaches.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Beh%C3%A7et%27s_disease",
    "medlineUrl": "https://medlineplus.gov/behcetssyndrome.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0003780",
    "omimUrl": "https://www.omim.org/entry/109650",
    "nordUrl": "https://rarediseases.org/rare-diseases/behcets-syndrome/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Behcet%20Syndrome",
    "leadingPagWebsiteUs": "https://www.behcets.com/",
    "keyCompanies": {
      "Amgen": {
        "url": "https://www.amgenpipeline.com/",
        "drugs": [
          "Apremilast (Otezla, CC-10004)"
        ]
      },
      "Hemay": {
        "url": "http://hemay.com.cn/",
        "drugs": [
          "Mufemilast (Hemay005)"
        ]
      }
    },
    "guidelineDrugs": {
      "Colchicine": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Methylprednisolone": {
        "modality": "SM"
      },
      "Infliximab": {
        "modality": "AB"
      },
      "Adalimumab": {
        "modality": "AB"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 3,
      "burdenTreated": 2,
      "safetyTolerability": 4,
      "convenienceAdministration": 3
    }
  },
  {
    "id": "cryoglobulinemia",
    "name": "Cryoglobulinemia",
    "description": "Cryoglobulinemia is an immune complex small vessel vasculitis in which cold precipitating antibodies clump and inflame or obstruct vessels, often in midlife women and commonly linked to chronic hepatitis C infection. Patients can develop purpura, arthralgias, neuropathy, skin ulcers, and glomerulonephritis that can progress to kidney failure. Treating hepatitis C helps but cryoglobulins clear in only about half of patients within 12 months, leaving persistent or relapsing disease that threatens kidneys and nerves. Current organ threatening care still relies on glucocorticoids and anti CD20 therapy, sometimes with plasmapheresis, creating demand for safer durable disease control.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Ultra-Orphan",
    "unmetNeedIndex": 2.886,
    "keyUnmetNeeds": "- Relapse-prevention/maintenance after DAA SVR, especially protecting renal and peripheral neuropathy outcomes\n- Steroid-sparing, infection-safer remission induction achieving complete response with corticosteroid withdrawal by ~6 months\n- More durable control in rituximab-refractory/relapse-prone patients with fewer clinic visits than IV anti‑CD20 induction",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Cryoglobulinemia",
    "medlineUrl": "https://medlineplus.gov/ency/article/000540.htm",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0005846",
    "omimUrl": "https://omim.org/entry/123550",
    "nordUrl": "https://rarediseases.org/rare-diseases/mixed-cryoglobulinemia/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Cryoglobulinemia",
    "leadingPagWebsiteUs": "https://www.vasculitisfoundation.org/",
    "guidelineDrugs": {
      "Rituxan (Rituximab)": {
        "modality": "AB",
        "company": "Genentech"
      },
      "Prednisolone": {
        "modality": "SM"
      },
      "Cyclophosphamide": {
        "modality": "SM"
      },
      "Epclusa (Sofosbuvir/Velpatasvir)": {
        "modality": "SM",
        "company": "Gilead Sciences"
      },
      "Mavyret (Glecaprevir/Pibrentasvir)": {
        "modality": "SM",
        "company": "AbbVie"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 3,
      "burdenTreated": 2,
      "safetyTolerability": 4,
      "convenienceAdministration": 5
    }
  },
  {
    "id": "multisystem-inflammatory-syndrome-in-children",
    "name": "Multisystem inflammatory syndrome in children",
    "description": "Rare, severe postCOVIDinfection hyperinflammatory syndrome in children that emerges 2 to 6 weeks after SARSCoV2 and can cause persistent fever, gastrointestinal symptoms, Kawasakilike mucocutaneous findings, cardiac dysfunction, shock, and multiorgan failure requiring hospitalization or intensive care. Treatment is empiric inpatient immunomodulation with intravenous immunoglobulin plus glucocorticoids, escalating to targeted cytokine blockade in refractory disease, but randomized evidence is limited and current regimens are burdensome and constrained by intravenous immunoglobulin access, motivating earlier and steroid sparing strategies.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 4.82,
    "keyUnmetNeeds": "- Oral/SC early-intervention therapy for SARS‑CoV‑2–exposed children with early MIS‑C features to prevent progression to hospitalized/ICU disease.\n- Rapid, targeted cytokine-pathway immunomodulation for refractory MIS‑C (persistent fever and/or significant end-organ involvement after first-line therapy) to avoid rescue escalation and organ-support needs.\n- IVIG-sparing (and steroid-minimizing) regimens that preserve cardiac protection while reducing IVIG access constraints and treatment burden.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Multisystem_inflammatory_syndrome_in_children",
    "medlineUrl": "https://magazine.medlineplus.gov/article/multisystem-inflammatory-syndrome-in-children",
    "opentargetsUrl": "https://platform.opentargets.org/disease/MONDO_0100163",
    "nordUrl": "https://rarediseases.org/mondo-disease/multisystem-inflammatory-syndrome-in-children-and-adults/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Multisystem%20inflammatory%20syndrome%20in%20children",
    "leadingPagWebsiteUs": "https://www.abovecircumstances.org/",
    "guidelineDrugs": {
      "Intravenous Immunoglobulin": {
        "modality": "AB"
      },
      "Methylprednisolone": {
        "modality": "SM"
      },
      "Aspirin": {
        "modality": "SM"
      },
      "Enoxaparin": {
        "modality": "SM"
      },
      "Kineret (Anakinra)": {
        "modality": "PEP",
        "company": "Swedish Orphan Biovitrum"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 6,
      "burdenTreated": 5,
      "safetyTolerability": 4,
      "convenienceAdministration": 7
    }
  },
  {
    "id": "cogan-syndrome",
    "name": "Cogan syndrome",
    "description": "Rare autoimmune disease affecting eyes and inner ears, typically in young adults, causing interstitial keratitis and rapid Meniere-like vertigo, tinnitus, and hearing loss that can progress to deafness within 1 to 3 months; may involve aortitis/large-vessel vasculitis. Steroids are first line but 37 to 54 percent have persistent hearing loss, leaving major unmet need for faster hearing preservation, steroid sparing durable control, and cardiovascular protection.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Ultra-Orphan",
    "unmetNeedIndex": 3.135,
    "keyUnmetNeeds": "- Acute (≤2 weeks) hearing-preservation therapy that reduces the ~50% residual risk of permanent hearing loss despite treatment\n- Steroid-sparing, durable disease control for refractory/steroid-dependent patients to enable prednisone taper and avoid long-term steroid toxicities\n- Targeted therapy to prevent/treat systemic vasculitis—especially cardiovascular aortitis/aortic insufficiency—in patients with systemic involvement",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Cogan_syndrome",
    "nordUrl": "https://rarediseases.org/mondo-disease/cogan-syndrome/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Cogan%20Syndrome",
    "leadingPagWebsiteUs": "https://www.vasculitisfoundation.org/",
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Infliximab": {
        "modality": "AB"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 4,
      "burdenTreated": 3,
      "safetyTolerability": 5,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "jaccoud-arthropathy",
    "name": "Jaccoud arthropathy",
    "description": "Jaccoud arthropathy is a deforming, typically non erosive joint disorder seen most often in systemic lupus erythematosus, driven by ligament laxity that causes reducible ulnar deviation and metacarpophalangeal subluxation but can progress to fixed fibrosis, contractures, and major functional impairment. Management is largely conservative using standard lupus and arthritis drugs plus splints and hand physiotherapy, with surgery lacking strong evidence, so the key unmet need is earlier disease modifying approaches that prevent irreversible deformity and loss of hand function.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 2.401,
    "keyUnmetNeeds": "- Early-intervention therapy in SLE patients with recurrent arthritis to prevent progression from mild to definite deforming Jaccoud arthropathy.\n- Anti-fibrotic/anti-contracture treatment to prevent fixed, non-reversible deformities and preserve joint function in longstanding/severe disease.\n- JA-targeted regimen demonstrating meaningful hand-function and quality-of-life improvement beyond current conservative NSAID/low-dose steroid/DMARD symptom control.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Jaccoud_arthropathy",
    "medlineUrl": "https://medlineplus.gov/jointdisorders.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/MONDO_0007823",
    "omimUrl": "https://omim.org/entry/182250",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Jaccoud%20Arthropathy",
    "guidelineDrugs": {
      "Hydroxychloroquine": {
        "modality": "SM"
      },
      "Prednisone": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Benlysta (Belimumab)": {
        "modality": "AB",
        "company": "GlaxoSmithKline"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 2,
      "burdenTreated": 1,
      "safetyTolerability": 4,
      "convenienceAdministration": 3
    }
  },
  {
    "id": "mikulicz-disease",
    "name": "Mikulicz disease",
    "description": "IgG4 related Mikulicz disease is a fibroinflammatory disorder causing persistent, usually painless bilateral swelling of lacrimal and major salivary glands with dry eyes and dry mouth, often in middle aged to older women and sometimes part of systemic IgG4 related disease. Steroids induce initial control, but relapses are common after taper and progressive fibrosis can become hard to reverse, leaving a need for durable steroid sparing therapies that prevent flares and preserve gland structure and function.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 2.32,
    "keyUnmetNeeds": "- Steroid-sparing maintenance to achieve durable flare-free, corticosteroid-free remission after glucocorticoid taper/discontinuation\n- Anti-fibrotic/anti-scarring control that preserves lacrimal/salivary gland structure and function (beyond transient swelling reduction)\n- Long-term remission strategies with improved safety vs chronic systemic immunosuppression (e.g., lower infection risk, less prolonged low-dose steroid exposure)",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Benign_lymphoepithelial_lesion",
    "medlineUrl": "https://medlineplus.gov/salivaryglanddisorders.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/MONDO_0019191",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=%22Mikulicz%20disease%22",
    "leadingPagWebsiteUs": "https://igg4ward.org/",
    "keyCompanies": {
      "Amgen": {
        "url": "https://www.amgenpipeline.com/",
        "drugs": [
          "inebilizumab-cdon (UPLIZNA)"
        ]
      },
      "Sanofi": {
        "url": "https://www.sanofi.com/en/our-science/our-pipeline",
        "drugs": [
          "rilzabrutinib (Wayrilz; SAR444671)"
        ]
      },
      "Zenas BioPharma": {
        "url": "https://zenasbio.com/our-science/pipeline/",
        "drugs": [
          "obexelimab"
        ]
      }
    },
    "guidelineDrugs": {
      "Prednisolone": {
        "modality": "SM"
      },
      "Rituximab": {
        "modality": "AB"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 6,
    "scores": {
      "burdenUntreated": 2,
      "burdenTreated": 1,
      "safetyTolerability": 4,
      "convenienceAdministration": 3
    }
  },
  {
    "id": "autoimmune-lymphoproliferative-syndrome",
    "name": "Autoimmune lymphoproliferative syndrome",
    "description": "Rare inherited immune dysregulation from impaired FAS mediated apoptosis causing early childhood chronic lymphadenopathy and splenomegaly, later autoimmune cytopenias and high lymphoma risk. Management relies on corticosteroids and other immunosuppression while avoiding splenectomy and rituximab associated prolonged hypogammaglobulinemia, leaving a need for durable steroid sparing pathway targeted disease modifying therapies now in Phase 2 trials.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Ultra-Orphan",
    "unmetNeedIndex": 1.744,
    "keyUnmetNeeds": "- Steroid-sparing, non–B-cell-depleting control of refractory autoimmune cytopenias (ITP/AIHA) that avoids rituximab-associated prolonged hypogammaglobulinemia/neutropenia and reduces need for splenectomy.\n- Oral targeted therapy that objectively debulks lymphoproliferation (spleen/lymph node volume reduction), improves cytopenias, and enables prednisone dose reduction without burdensome monitoring.\n- Non-transplant, disease-modifying restoration of FAS-pathway apoptosis/lymphocyte homeostasis to reduce long-term lymphoma risk and reliance on splenectomy/HSCT.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Autoimmune_lymphoproliferative_syndrome",
    "medlineUrl": "https://medlineplus.gov/genetics/condition/autoimmune-lymphoproliferative-syndrome/",
    "opentargetsUrl": "https://platform.opentargets.org/disease/MONDO_0017979",
    "omimUrl": "https://www.omim.org/entry/601859",
    "nordUrl": "https://rarediseases.org/mondo-disease/autoimmune-lymphoproliferative-syndrome/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=%22Autoimmune%20lymphoproliferative%20syndrome%22",
    "keyCompanies": {
      "Corvus Pharmaceuticals": {
        "url": "https://www.corvuspharma.com/our-science/our-pipeline/",
        "drugs": [
          "Soquelitinib (CPI-818)"
        ]
      }
    },
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Immune Globulin Intravenous (Human)": {
        "modality": "AB",
        "company": "Multiple"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Sirolimus": {
        "modality": "SM"
      },
      "Rituximab": {
        "modality": "AB",
        "company": "Genentech (Roche)"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 2,
      "burdenTreated": 1,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "heerfordt-syndrome",
    "name": "Heerfordt syndrome",
    "description": "Heerfordt syndrome (uveoparotid fever) is a rare acute presentation of systemic sarcoidosis marked by uveitis with parotid swelling, fever, and facial nerve palsy; the central unmet need is durable, vision preserving control as sight threatening cystoid macular edema can develop and care often relies on systemic corticosteroids that may be inadequate or toxic, requiring steroid sparing immunosuppressants and tumor necrosis factor alpha inhibitors.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Ultra-Orphan",
    "unmetNeedIndex": 2.433,
    "keyUnmetNeeds": "- Durable vision-preserving control of Heerfordt/sarcoid uveitis (esp. posterior/macular disease with cystoid macular oedema), achieving visual acuity/inflammation improvement with ≥50% systemic steroid taper without relapse.\n- Steroid-sparing systemic therapy to avoid long-term corticosteroid toxicities (e.g., diabetes/HTN/osteoporosis; cataract/glaucoma) in patients needing prolonged systemic steroids.\n- Safer, lower-burden alternatives to anti-TNF biologics for steroid-refractory ocular sarcoidosis/uveitis (fewer serious infections/interruptions, less relapse after discontinuation, and less IV/SC administration burden).",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Heerfordt_syndrome",
    "medlineUrl": "https://medlineplus.gov/sarcoidosis.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_1001232",
    "omimUrl": "https://www.omim.org/entry/181000",
    "nordUrl": "https://rarediseases.org/rare-diseases/sarcoidosis/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=%22Heerfordt+syndrome%22+OR+%22Uveoparotid+fever%22",
    "leadingPagWebsiteUs": "https://www.stopsarcoidosis.org/",
    "keyCompanies": {
      "aTyr Pharma": {
        "url": "https://atyrpharma.com/programs/pipeline-2/",
        "drugs": [
          "Efzofitimod"
        ]
      },
      "Priovant": {
        "url": "https://priovant.com/pipeline.html",
        "drugs": [
          "Brepocitinib"
        ]
      },
      "Roche": {
        "url": "https://www.roche.com/solutions/pipeline",
        "drugs": [
          "Vamikibart"
        ]
      },
      "Eli Lilly": {
        "url": "https://www.lilly.com/science/research-development/pipeline",
        "drugs": [
          "Baricitinib"
        ]
      }
    },
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Infliximab": {
        "modality": "AB"
      },
      "Adalimumab": {
        "modality": "AB"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 3,
      "burdenTreated": 2,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "eosinophilia-myalgia-syndrome",
    "name": "Eosinophilia-myalgia syndrome",
    "description": "Eosinophilia myalgia syndrome is a rare, abrupt onset inflammatory illness first recognized in the 1989 L tryptophan associated epidemic, defined by eosinophilia and disabling generalized myalgia with intense extremity pain. Many patients develop edema and skin induration, cough or dyspnea, and neurologic injury such as polyneuropathy and cognitive impairment that can persist despite steroids. Care remains empiric, typically corticosteroids, but relapse during tapering is common, leaving major unmet needs for steroid sparing disease control and durable relief of chronic pain and neurotoxicity beyond laboratory eosinophil response.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Ultra-Orphan",
    "unmetNeedIndex": 3.548,
    "keyUnmetNeeds": "- Acute-phase therapy that meaningfully reduces severe myalgia/cramps even when eosinophilia improves (beyond eosinophil-count response).\n- Disease-modifying, steroid-sparing early regimen that reduces symptom severity/duration without high-dose corticosteroids.\n- Later-phase treatment for persistent neurologic sequelae, especially unchanged peripheral neuropathy and worsening cognitive changes.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Eosinophilia%E2%80%93myalgia_syndrome",
    "medlineUrl": "https://medlineplus.gov/druginfo/natural/794.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_1001316",
    "nordUrl": "https://rarediseases.org/rare-diseases/eosinophilia-myalgia-syndrome/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Eosinophilia-myalgia+syndrome",
    "leadingPagWebsiteUs": "https://www.nemsn.org/",
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 5,
      "burdenTreated": 4,
      "safetyTolerability": 4,
      "convenienceAdministration": 5
    }
  },
  {
    "id": "granulomatous-myositis",
    "name": "Granulomatous myositis",
    "description": "Granulomatous myositis is a rare, biopsy defined inflammatory myopathy with non caseating granulomas, often linked to systemic sarcoidosis, typically affecting midlife to older women with proximal weakness and sometimes dysphagia. Management relies on prolonged corticosteroids and other immunosuppression, but relapse is common and steroid toxicity accumulates, with some patients progressing to severe disability especially with distal weakness and amyotrophy. Normal creatine kinase in chronic disease can delay recognition and complicate monitoring, reinforcing the need for durable steroid sparing disease control and better ways to track and prevent functional decline.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 3.25,
    "keyUnmetNeeds": "- Relapse-free maintenance of muscle response after initial corticosteroid improvement\n- Therapies that prevent/slow progression to severe disability in the “severe GM” phenotype (notably distal weakness + amyotrophy)\n- Steroid-sparing, lower-toxicity and more convenient regimens that keep prednisone <10–15 mg/day and reduce reliance on infusion anti-TNF",
    "medlineUrl": "https://medlineplus.gov/sarcoidosis.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0003058",
    "omimUrl": "https://www.omim.org/entry/181000",
    "nordUrl": "https://rarediseases.org/rare-diseases/sarcoidosis/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Granulomatous%20myositis",
    "leadingPagWebsiteUs": "https://www.stopsarcoidosis.org/",
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Infliximab": {
        "modality": "AB"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 4,
      "burdenTreated": 3,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "relapsing-polychondritis",
    "name": "Relapsing polychondritis",
    "description": "Relapsing polychondritis is a rare autoimmune disease with recurrent inflammation of ear, nose, and airway cartilage, typically presenting in midlife with painful auricular chondritis and inflammatory arthritis. Diagnosis is often delayed, and about half of patients develop airway involvement that can progress to tracheobronchomalacia and life threatening airway collapse. Care is largely empirical and steroid dependent, with no standard, trial proven disease modifying therapy and a strong need for steroid sparing control and earlier, more precise treatment, including in VEXAS overlap associated with higher mortality.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Ultra-Orphan",
    "unmetNeedIndex": 3.287,
    "keyUnmetNeeds": "- Airway-protective disease control to prevent laryngotracheobronchial collapse/respiratory failure in RP patients with airway involvement\n- Steroid-sparing therapy achieving durable remission (~6 months) and reducing flare recurrence in mild–moderately active RP\n- Precision therapy for VEXAS/UBA1-mutant RP enabling prednisone tapering below ~10–20 mg/day while controlling inflammatory and hematologic manifestations",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Relapsing_polychondritis",
    "medlineUrl": "https://medlineplus.gov/ency/article/001223.htm",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_1001148",
    "nordUrl": "https://rarediseases.org/rare-diseases/relapsing-polychondritis/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Relapsing%20Polychondritis",
    "leadingPagWebsiteUs": "https://polychondritis.org/",
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Colchicine": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 4,
      "burdenTreated": 3,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "rheumatoid-arthritis",
    "name": "Rheumatoid arthritis",
    "description": "Rheumatoid arthritis is a chronic autoimmune inflammatory arthritis that attacks the joint lining and can involve other organs, causing symmetric small joint pain, swelling, prolonged morning stiffness, fatigue, and progressive disability. Despite many immunomodulatory options, a sizable group remains difficult to treat, cycling through multiple mechanisms without durable control or the ability to taper steroids. Many also have persistent pain and fatigue even when inflammatory markers suggest remission, leaving a patient reported outcomes gap. Long term therapy is constrained by safety and monitoring burdens, with Janus kinase inhibitors carrying boxed warnings for serious cardiovascular, cancer, clotting, and mortality risks, underscoring the need for safer, more effective disease modifying options.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Uncommon",
    "unmetNeedIndex": 3.35,
    "keyUnmetNeeds": "- Sustained remission/low disease activity in difficult-to-treat RA after csDMARD failure plus ≥2 bDMARDs with different MOAs, including steroid-dependent and/or rapidly progressive disease.\n- Drugs that reduce residual pain and fatigue (e.g., VAS pain/fatigue) in patients already in remission/low disease activity.\n- Long-term RA therapies with comparable efficacy but improved safety for CV/cancer/thrombotic-risk patients and reduced monitoring/administration burden vs JAK inhibitors, methotrexate labs, and q2w biologic injections.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Rheumatoid_arthritis",
    "medlineUrl": "https://medlineplus.gov/rheumatoidarthritis.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0000685",
    "omimUrl": "https://omim.org/entry/180300",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Rheumatoid%20Arthritis",
    "leadingPagWebsiteUs": "https://www.arthritis.org/",
    "keyCompanies": {
      "AbbVie": {
        "url": "https://www.abbvie.com/science/pipeline.html",
        "drugs": [
          "upadacitinib (RINVOQ)"
        ]
      },
      "Bristol Myers Squibb": {
        "url": "https://www.bms.com/researchers-and-partners/in-the-pipeline.html",
        "drugs": [
          "abatacept (ORENCIA)"
        ]
      },
      "Eli Lilly": {
        "url": "https://www.lilly.com/science/research-development/pipeline",
        "drugs": [
          "baricitinib (OLUMIANT)"
        ]
      },
      "Pfizer": {
        "url": "https://www.pfizer.com/science/drug-product-pipeline",
        "drugs": [
          "tofacitinib (XELJANZ)"
        ]
      },
      "UCB": {
        "url": "https://www.ucb.com/innovation/pipeline",
        "drugs": [
          "certolizumab pegol (CIMZIA)"
        ]
      },
      "Astellas": {
        "url": "https://www.astellas.com/en/science/research-and-development/pipeline",
        "drugs": [
          "peficitinib (ASP015K)"
        ]
      },
      "RemeGen": {
        "url": "https://www.remegen.com/?v=listing&cid=92",
        "drugs": [
          "telitacicept (RC18)"
        ]
      },
      "Taisho": {
        "url": "https://www.taisho.co.jp/en/business/research/",
        "drugs": [
          "ozoralizumab (TS-152)"
        ]
      }
    },
    "guidelineDrugs": {
      "Methotrexate": {
        "modality": "SM"
      },
      "Hydroxychloroquine": {
        "modality": "SM"
      },
      "Sulfasalazine": {
        "modality": "SM"
      },
      "Leflunomide": {
        "modality": "SM"
      },
      "Humira (Adalimumab)": {
        "modality": "AB",
        "company": "AbbVie"
      }
    },
    "pipelineActivity": 5,
    "scores": {
      "burdenUntreated": 5,
      "burdenTreated": 2,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "lupus-erythematosus-systemic",
    "name": "Lupus erythematosus | systemic",
    "description": "Systemic lupus erythematosus is a chronic autoimmune disease that drives systemic inflammation, typically affecting women of childbearing age with fatigue, joint pain, and sometimes a photosensitive butterfly rash, with kidney involvement in about a third that can determine long term outcomes. Treatment still often relies on glucocorticoids despite strong pressure to taper or stop, many patients miss treat to target renal response milestones, and pain, fatigue, and broader quality of life can remain poor even when clinical response criteria are met, sustaining demand for steroid sparing, organ protective, patient centered disease control.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Uncommon",
    "unmetNeedIndex": 3.316,
    "keyUnmetNeeds": "- Steroid-sparing control enabling taper to ≤5 mg/day prednisone and ultimately complete glucocorticoid withdrawal without flares in GC-dependent SLE\n- Lupus nephritis regimens with higher rates of achieving validated renal-response targets (proteinuria ↓≥25% at 3 months, ↓≥50% at 6 months; <500–700 mg/day at 12 months with GFR within 10% of baseline)\n- Therapies that significantly improve fatigue and pain/HRQoL (e.g., prevent FACIT-F <30 and reduce EQ-5D pain/discomfort) even in patients meeting LLDAS or DORIS remission",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Lupus",
    "medlineUrl": "https://medlineplus.gov/lupus.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/MONDO_0007915",
    "omimUrl": "https://omim.org/entry/152700",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Systemic%20Lupus%20Erythematosus",
    "leadingPagWebsiteUs": "https://www.lupus.org/",
    "keyCompanies": {
      "AstraZeneca": {
        "url": "https://www.astrazeneca.com/our-therapy-areas/pipeline.html",
        "drugs": [
          "Anifrolumab (Saphnelo)"
        ]
      },
      "GSK": {
        "url": "https://www.gsk.com/en-gb/innovation/pipeline/",
        "drugs": [
          "Belimumab (Benlysta)"
        ]
      },
      "UCB": {
        "url": "https://www.ucb.com/innovation/pipeline",
        "drugs": [
          "Dapirolizumab pegol"
        ]
      },
      "Novartis": {
        "url": "https://www.novartis.com/research-development/novartis-pipeline",
        "drugs": [
          "Ianalumab"
        ]
      },
      "Johnson & Johnson": {
        "url": "https://www.investor.jnj.com/pipeline/development-pipeline/default.aspx",
        "drugs": [
          "Nipocalimab"
        ]
      },
      "Biogen": {
        "url": "https://www.biogen.com/science-and-innovation/pipeline.html",
        "drugs": [
          "Litifilimab (BIIB059)"
        ]
      },
      "Bristol Myers Squibb": {
        "url": "https://www.bms.com/researchers-and-partners/in-the-pipeline.html",
        "drugs": [
          "Deucravacitinib (BMS-986165)"
        ]
      },
      "Roche": {
        "url": "https://www.roche.com/solutions/pipeline",
        "drugs": [
          "Obinutuzumab"
        ]
      }
    },
    "guidelineDrugs": {
      "Hydroxychloroquine": {
        "modality": "SM"
      },
      "Prednisone": {
        "modality": "SM"
      },
      "Mycophenolate Mofetil": {
        "modality": "SM"
      },
      "Azathioprine": {
        "modality": "SM"
      },
      "Benlysta (Belimumab)": {
        "modality": "AB",
        "company": "GlaxoSmithKline"
      }
    },
    "pipelineActivity": 1,
    "scores": {
      "burdenUntreated": 6,
      "burdenTreated": 3,
      "safetyTolerability": 4,
      "convenienceAdministration": 3
    }
  },
  {
    "id": "polymyalgia-rheumatica",
    "name": "Polymyalgia rheumatica",
    "description": "Inflammatory syndrome of older adults, more common in women, causing shoulder and hip pain with prolonged morning stiffness and elevated inflammatory markers, sometimes overlapping with giant cell arteritis. Prednisone often works quickly but many patients require 1 to 2 years or longer of therapy with relapse risk, making durable steroid sparing control the key unmet need to avoid cumulative glucocorticoid toxicity including infection, hypertension, weight gain, diabetes, and osteoporosis.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Uncommon",
    "unmetNeedIndex": 3.396,
    "keyUnmetNeeds": "- Relapse-proof, steroid-free disease control achieving sustained remission through Week 52 during prednisone taper.\n- Glucocorticoid-toxicity–sparing therapy that meaningfully lowers cumulative steroid exposure and bone/metabolic complications in elderly PMR.\n- More convenient and safer steroid-sparing options than IL‑6R mAbs (e.g., non-injectable/less immunosuppressive) reducing injection burden and serious infection/hematologic AEs.",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Polymyalgia_rheumatica",
    "medlineUrl": "https://medlineplus.gov/polymyalgiarheumatica.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0008518",
    "omimUrl": "https://www.omim.org/entry/187360",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Polymyalgia%20Rheumatica",
    "leadingPagWebsiteUs": "https://ghlf.org/",
    "keyCompanies": {
      "Sanofi": {
        "url": "https://www.sanofi.com/en/our-science/our-pipeline",
        "drugs": [
          "Kevzara (sarilumab)"
        ]
      },
      "Regeneron": {
        "url": "https://www.regeneron.com/science/investigational-pipeline",
        "drugs": [
          "Kevzara (sarilumab)"
        ]
      },
      "Novartis": {
        "url": "https://www.novartis.com/research-development/novartis-pipeline",
        "drugs": [
          "Cosentyx (secukinumab)"
        ]
      }
    },
    "guidelineDrugs": {
      "Prednisone": {
        "modality": "SM"
      },
      "Methotrexate": {
        "modality": "SM"
      },
      "Kevzara (Sarilumab)": {
        "modality": "AB",
        "company": "Sanofi"
      }
    },
    "pipelineActivity": 6,
    "scores": {
      "burdenUntreated": 4,
      "burdenTreated": 2,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  },
  {
    "id": "ankylosing-spondylitis",
    "name": "Ankylosing spondylitis",
    "description": "Ankylosing spondylitis is an inflammatory arthritis that typically starts before age 45 with chronic back pain and stiffness that worsens at night and early morning and improves with exercise, often with enthesitis or uveitis. Ongoing inflammation can drive new bone formation and spinal fusion, yet current therapies have variable effectiveness and tumor necrosis factor inhibitors have not been shown to prevent progression to fusion. Treatment is further complicated in patients with comorbid inflammatory bowel disease where interleukin 17 blockade requires caution.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Uncommon",
    "unmetNeedIndex": 3.421,
    "keyUnmetNeeds": "- Sustained symptom/function control (e.g., ASAS40/ASDAS targets) in TNFi nonresponders/therapeutic failures.\n- Reliable inhibition of radiographic progression/new bone formation (ΔmSASSS/syndesmophytes).\n- Axial disease control that is safe/effective in patients with recurrent uveitis or active IBD (IBD-safe option beyond IL-17i constraints).",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Ankylosing_spondylitis",
    "medlineUrl": "https://medlineplus.gov/ankylosingspondylitis.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0003898",
    "omimUrl": "https://omim.org/entry/106300",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Ankylosing%20Spondylitis",
    "leadingPagWebsiteUs": "https://spondylitis.org/",
    "keyCompanies": {
      "AbbVie": {
        "url": "https://www.abbvie.com/science/pipeline.html",
        "drugs": [
          "Upadacitinib",
          "Adalimumab"
        ]
      },
      "UCB": {
        "url": "https://www.ucb.com/innovation/pipeline",
        "drugs": [
          "Bimekizumab",
          "Certolizumab pegol"
        ]
      },
      "Novartis": {
        "url": "https://www.novartis.com/research-development/novartis-pipeline",
        "drugs": [
          "Secukinumab"
        ]
      },
      "Eli Lilly": {
        "url": "https://www.lilly.com/science/research-development/pipeline",
        "drugs": [
          "Ixekizumab"
        ]
      },
      "Johnson & Johnson": {
        "url": "https://www.investor.jnj.com/pipeline/development-pipeline/default.aspx",
        "drugs": [
          "Golimumab",
          "Infliximab"
        ]
      }
    },
    "guidelineDrugs": {
      "Celecoxib": {
        "modality": "SM"
      },
      "Humira (Adalimumab)": {
        "modality": "AB",
        "company": "AbbVie"
      },
      "Enbrel (Etanercept)": {
        "modality": "OTH",
        "company": "Amgen"
      },
      "Cosentyx (Secukinumab)": {
        "modality": "AB",
        "company": "Novartis"
      },
      "Taltz (Ixekizumab)": {
        "modality": "AB",
        "company": "Eli Lilly"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 3,
      "burdenTreated": 2,
      "safetyTolerability": 3,
      "convenienceAdministration": 3
    }
  },
  {
    "id": "psoriatic-arthritis",
    "name": "Psoriatic arthritis",
    "description": "Psoriatic arthritis is a chronic inflammatory arthritis linked to psoriasis, often emerging about a decade after skin disease, causing painful swollen joints, enthesitis, possible spine involvement, nail changes, and fatigue that can progress to irreversible joint damage. Despite biologics such as tumour necrosis factor inhibitors, many patients still report substantial pain and fatigue, and axial disease remains hard to treat and study due to limited evidence plus weak definitions and outcome measures. Safer, convenient oral options that match biologic-level control are constrained by Janus kinase inhibitor boxed-warning risks.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Uncommon",
    "unmetNeedIndex": 3.241,
    "keyUnmetNeeds": "- Improve patient-reported symptom remission (pain ≤1; fatigue ≤2), where routine-care TNFi achieves low pain/fatigue remission rates.\n- Develop axial PsA–specific therapies evaluated in clearly defined axPsA cohorts using validated axPsA outcome measures.\n- Deliver once-daily oral, biologic-like multi-domain control without JAK boxed-warning risks (esp. for higher-risk patients).",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Psoriatic_arthritis",
    "medlineUrl": "https://medlineplus.gov/psoriaticarthritis.html",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0003778",
    "omimUrl": "https://www.omim.org/entry/607507",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Psoriatic%20Arthritis",
    "leadingPagWebsiteUs": "https://www.psoriasis.org/",
    "keyCompanies": {
      "AbbVie": {
        "url": "https://www.abbvie.com/science/pipeline.html",
        "drugs": [
          "upadacitinib",
          "risankizumab"
        ]
      },
      "Johnson & Johnson": {
        "url": "https://www.investor.jnj.com/pipeline/development-pipeline/default.aspx",
        "drugs": [
          "guselkumab"
        ]
      },
      "Novartis": {
        "url": "https://www.novartis.com/research-development/novartis-pipeline",
        "drugs": [
          "secukinumab"
        ]
      },
      "Eli Lilly": {
        "url": "https://www.lilly.com/science/research-development/pipeline",
        "drugs": [
          "ixekizumab"
        ]
      },
      "UCB": {
        "url": "https://www.ucb.com/innovation/pipeline",
        "drugs": [
          "bimekizumab"
        ]
      },
      "Bristol Myers Squibb": {
        "url": "https://www.bms.com/researchers-and-partners/in-the-pipeline.html",
        "drugs": [
          "deucravacitinib"
        ]
      },
      "Takeda": {
        "url": "https://www.takeda.com/science/pipeline/",
        "drugs": [
          "zasocitinib"
        ]
      },
      "MoonLake Immunotherapeutics": {
        "url": "https://moonlaketx.com/pipeline/",
        "drugs": [
          "sonelokimab"
        ]
      }
    },
    "guidelineDrugs": {
      "Methotrexate": {
        "modality": "SM"
      },
      "Humira (Adalimumab)": {
        "modality": "AB",
        "company": "AbbVie"
      },
      "Cosentyx (Secukinumab)": {
        "modality": "AB",
        "company": "Novartis"
      },
      "Otezla (Apremilast)": {
        "modality": "SM",
        "company": "Amgen"
      },
      "Rinvoq (Upadacitinib)": {
        "modality": "SM",
        "company": "AbbVie"
      }
    },
    "pipelineActivity": 5,
    "scores": {
      "burdenUntreated": 3,
      "burdenTreated": 2,
      "safetyTolerability": 4,
      "convenienceAdministration": 3
    }
  },
  {
    "id": "felty-syndrome",
    "name": "Felty syndrome",
    "description": "Rare complication of long standing seropositive rheumatoid arthritis marked by splenomegaly and neutropenia that drives recurrent, sometimes severe infections. Treatment largely repurposes rheumatoid arthritis immunosuppression and neutrophil support such as methotrexate, rituximab, granulocyte colony stimulating factor or splenectomy, but durable neutrophil recovery is often limited by relapse and safety tradeoffs, and disease specific evidence is sparse.",
    "category": "Immunology",
    "therapeuticArea": "Immunology",
    "prevalence": "Rare",
    "unmetNeedIndex": 4.24,
    "keyUnmetNeeds": "- Durable ANC restoration to >2,000/µL in severe neutropenia (ANC <500/µL) to cut serious infections/sepsis risk\n- Steroid-sparing, sustained neutropenia control with safer/more durable alternatives to G‑CSF (avoid rebound ANC drop; avoid rash/arthritis flares)\n- Mechanism-targeted therapies for methotrexate→rituximab failures (e.g., T‑cell/T‑LGL/STAT3-axis; JAK/STAT approaches)",
    "wikipediaUrl": "https://en.wikipedia.org/wiki/Felty%27s_syndrome",
    "medlineUrl": "https://medlineplus.gov/ency/article/000445.htm",
    "opentargetsUrl": "https://platform.opentargets.org/disease/EFO_0007269",
    "omimUrl": "https://omim.org/entry/134750",
    "nordUrl": "https://rarediseases.org/rare-diseases/felty-syndrome/",
    "clinicalTrialsUrl": "https://clinicaltrials.gov/search?cond=Felty%20Syndrome",
    "leadingPagWebsiteUs": "https://www.arthritis.org/",
    "guidelineDrugs": {
      "Methotrexate": {
        "modality": "SM"
      },
      "Rituximab": {
        "modality": "AB",
        "company": "Genentech (Roche)"
      },
      "Filgrastim": {
        "modality": "OTH",
        "company": "Amgen"
      },
      "Leflunomide": {
        "modality": "SM"
      },
      "Hydroxychloroquine": {
        "modality": "SM"
      }
    },
    "pipelineActivity": 7,
    "scores": {
      "burdenUntreated": 5,
      "burdenTreated": 4,
      "safetyTolerability": 4,
      "convenienceAdministration": 4
    }
  }
];

export function compositeScore(indication: ConvokeImmunologyRecord) {
  return indication.unmetNeedIndex;
}
