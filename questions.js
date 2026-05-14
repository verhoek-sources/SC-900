const QUESTIONS = [
  // ── Describe security, compliance, and identity concepts ─────────────
  {
    id: 1,
    type: "learning",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "What does Zero Trust mean in practice?",
    options: [
      "Trust users inside the network by default",
      "Always verify explicitly and assume breach",
      "Disable all remote access",
      "Use only on-premises identity systems"
    ],
    answer: 1,
    explanation: "Zero Trust is based on explicit verification, least privilege, and assuming breach rather than trusting by network location.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 2,
    type: "learning",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "Which principle gives users only the access they need for their tasks?",
    options: ["High availability", "Defense in depth", "Least privilege", "Non-repudiation"],
    answer: 2,
    explanation: "Least privilege reduces risk by limiting permissions to only what is required.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 3,
    type: "learning",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "Which model separates security protections into multiple layers so one control failure does not expose everything?",
    options: ["Shared responsibility", "Defense in depth", "Single sign-on", "Federation"],
    answer: 1,
    explanation: "Defense in depth uses layered controls across identity, network, compute, and data.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 4,
    type: "learning",
    topic: "Describe security, compliance, and identity concepts",
    module: "Compliance Concepts",
    question: "What is the primary goal of compliance in an organization?",
    options: [
      "Maximize CPU performance",
      "Meet legal, regulatory, and policy requirements",
      "Reduce software licenses",
      "Replace identity systems"
    ],
    answer: 1,
    explanation: "Compliance is about meeting internal and external requirements and demonstrating that controls are effective.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 5,
    type: "learning",
    topic: "Describe security, compliance, and identity concepts",
    module: "Compliance Concepts",
    question: "Which concept classifies data by sensitivity and applies controls accordingly?",
    options: ["Data residency", "Data classification", "Load balancing", "Virtualization"],
    answer: 1,
    explanation: "Data classification identifies sensitivity and drives labeling, protection, and retention decisions.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 6,
    type: "learning",
    topic: "Describe security, compliance, and identity concepts",
    module: "Identity Concepts",
    question: "Authentication answers which question?",
    options: ["What can you do?", "Who are you?", "When did this happen?", "Where is data stored?"],
    answer: 1,
    explanation: "Authentication verifies identity; authorization determines permitted actions.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 7,
    type: "learning",
    topic: "Describe security, compliance, and identity concepts",
    module: "Identity Concepts",
    question: "What does authorization determine after authentication succeeds?",
    options: ["Identity proofing method", "Password complexity", "What resources the user can access", "Physical datacenter location"],
    answer: 2,
    explanation: "Authorization evaluates access rights, often via roles, groups, and policies.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 8,
    type: "exam",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "A company wants to reduce risk from stolen passwords with minimal user friction. Which control is most appropriate?",
    options: ["Disable SSO", "Enable multifactor authentication", "Increase username length", "Remove conditional policies"],
    answer: 1,
    explanation: "MFA significantly reduces account compromise risk even when passwords are exposed.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 9,
    type: "exam",
    topic: "Describe security, compliance, and identity concepts",
    module: "Compliance Concepts",
    question: "An auditor asks for proof that policies are consistently enforced. What should the security team provide?",
    options: ["Only architecture diagrams", "Compliance reports and audit logs", "Source code comments", "Network cable inventory"],
    answer: 1,
    explanation: "Compliance evidence is typically shown through reports, logs, control mappings, and assessments.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 10,
    type: "exam",
    topic: "Describe security, compliance, and identity concepts",
    module: "Identity Concepts",
    question: "An app uses a trusted external identity provider so users can sign in with existing credentials. What is this called?",
    options: ["Federation", "Token revocation", "Data masking", "Privileged access workstation"],
    answer: 0,
    explanation: "Federation allows identity trust between organizations or systems for seamless authentication.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },

  // ── Describe the capabilities of Microsoft Entra ───────────────────
  {
    id: 11,
    type: "learning",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Entra ID Fundamentals",
    question: "What is Microsoft Entra ID primarily used for?",
    options: [
      "Disk encryption management",
      "Cloud identity and access management",
      "SIEM event correlation",
      "Database replication"
    ],
    answer: 1,
    explanation: "Microsoft Entra ID provides identity services such as authentication, authorization, and access governance.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 12,
    type: "learning",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Entra ID Fundamentals",
    question: "Which identity type is used by applications and automation instead of humans?",
    options: ["Guest identity", "Workload identity", "External identity", "Federated credential"],
    answer: 1,
    explanation: "Workload identities represent apps, services, and scripts to access resources securely.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 13,
    type: "learning",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Authentication & Access",
    question: "What does Conditional Access evaluate?",
    options: [
      "Only the user’s password length",
      "Signals like user, location, device, and risk to enforce access policies",
      "Only whether a device is domain-joined",
      "Only the app’s code quality"
    ],
    answer: 1,
    explanation: "Conditional Access applies access decisions using contextual signals and policy rules.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 14,
    type: "learning",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Authentication & Access",
    question: "What is the purpose of self-service password reset (SSPR)?",
    options: [
      "Force daily password changes",
      "Allow users to reset passwords without help desk intervention",
      "Replace MFA entirely",
      "Disable guest accounts"
    ],
    answer: 1,
    explanation: "SSPR reduces support overhead while helping users recover account access securely.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 15,
    type: "learning",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Identity Governance",
    question: "Which Entra feature helps enforce just-in-time access to privileged roles?",
    options: ["Password writeback", "Privileged Identity Management (PIM)", "Cross-tenant sync", "Security defaults"],
    answer: 1,
    explanation: "PIM enables time-bound, approval-based privileged role activation and reduces standing admin access.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 16,
    type: "learning",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Identity Governance",
    question: "What do access reviews help organizations achieve?",
    options: [
      "Increase mailbox storage quotas",
      "Periodically validate whether users still need assigned access",
      "Automatically patch endpoints",
      "Classify documents by retention labels"
    ],
    answer: 1,
    explanation: "Access reviews support governance by confirming and removing unnecessary permissions over time.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 17,
    type: "exam",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Authentication & Access",
    question: "A user signs in from a new country and from an unmanaged device. Which Entra capability can require MFA or block access based on this context?",
    options: ["Entitlement management", "Conditional Access", "Role assignment schedules", "Password protection"],
    answer: 1,
    explanation: "Conditional Access uses context like location, device state, and risk to enforce controls.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 18,
    type: "exam",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Identity Governance",
    question: "A contractor should keep project access for 90 days and then lose it automatically unless reapproved. Which capability best fits?",
    options: ["Security defaults", "Entitlement management with access packages", "Tenant restrictions", "Passwordless sign-in"],
    answer: 1,
    explanation: "Entitlement management can package access with expiration and approval workflows.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 19,
    type: "exam",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Entra ID Fundamentals",
    question: "Which model lets users sign in once and access many applications without reauthenticating every time?",
    options: ["RBAC", "SSO", "Data loss prevention", "Tokenization"],
    answer: 1,
    explanation: "Single sign-on (SSO) improves usability and can strengthen security when combined with central policies.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 20,
    type: "exam",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Authentication & Access",
    question: "Which Entra control helps prevent users from choosing weak or banned passwords?",
    options: ["Password protection", "Defender for Cloud Apps", "eDiscovery", "Data connectors"],
    answer: 0,
    explanation: "Password protection blocks commonly used or custom-banned passwords to reduce compromise risk.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },

  // ── Describe the capabilities of Microsoft security solutions ───────
  {
    id: 21,
    type: "learning",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Defender XDR",
    question: "What is Microsoft Defender XDR designed to do?",
    options: [
      "Manage hardware procurement",
      "Correlate and respond to threats across identities, endpoints, email, and apps",
      "Replace all firewall appliances",
      "Provide only compliance score reports"
    ],
    answer: 1,
    explanation: "Defender XDR unifies signals and incidents across Microsoft security products for detection and response.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 22,
    type: "learning",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Defender for Cloud",
    question: "What is a core capability of Microsoft Defender for Cloud?",
    options: [
      "Code repository hosting",
      "Security posture management and workload protection",
      "Payroll processing",
      "Identity federation with social accounts"
    ],
    answer: 1,
    explanation: "Defender for Cloud helps assess and improve security posture and provides workload threat protection.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 23,
    type: "learning",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Microsoft Sentinel",
    question: "What type of solution is Microsoft Sentinel?",
    options: ["Endpoint antivirus only", "SIEM and SOAR", "Password vault", "Data warehouse"],
    answer: 1,
    explanation: "Microsoft Sentinel is a cloud-native SIEM/SOAR platform for collecting, analyzing, and automating security operations.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 24,
    type: "learning",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Defender XDR",
    question: "Which Defender product focuses on endpoint detection and response?",
    options: ["Defender for Endpoint", "Defender for Identity", "Defender for Office 365", "Defender for Cloud Apps"],
    answer: 0,
    explanation: "Defender for Endpoint protects and investigates threats on client and server endpoints.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 25,
    type: "learning",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Defender XDR",
    question: "Which Defender product helps detect identity-based attacks such as pass-the-hash?",
    options: ["Defender for Identity", "Defender for Cloud", "Sentinel", "Purview Insider Risk"],
    answer: 0,
    explanation: "Defender for Identity monitors on-premises identity signals and suspicious behavior in hybrid environments.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 26,
    type: "learning",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Defender for Cloud",
    question: "What does secure score in Defender for Cloud help with?",
    options: [
      "Ranking coding interview candidates",
      "Prioritizing recommended security improvements",
      "Measuring internet bandwidth",
      "Tracking software license counts"
    ],
    answer: 1,
    explanation: "Secure score shows posture and recommended remediation steps to reduce exposure.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 27,
    type: "exam",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Microsoft Sentinel",
    question: "A SOC needs to ingest logs from Microsoft and non-Microsoft sources and automate incident response workflows. Which solution fits best?",
    options: ["Defender for Endpoint", "Microsoft Sentinel", "Entra ID", "Compliance Manager"],
    answer: 1,
    explanation: "Sentinel supports broad data connectors and automation through analytics and playbooks.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 28,
    type: "exam",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Defender XDR",
    question: "Your team wants one incident view that links email phishing, endpoint malware, and identity compromise. Which capability is most relevant?",
    options: ["Purview eDiscovery", "Defender XDR incident correlation", "Azure Policy initiatives", "Entra access reviews"],
    answer: 1,
    explanation: "Defender XDR correlates related alerts into incidents across multiple signal domains.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 29,
    type: "exam",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Defender for Cloud",
    question: "A company runs workloads in Azure and AWS and wants centralized cloud security posture visibility. Which Microsoft solution supports this goal?",
    options: ["Defender for Cloud", "Windows Defender Firewall", "SSPR", "Information barriers"],
    answer: 0,
    explanation: "Defender for Cloud provides multicloud posture and workload protection capabilities.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 30,
    type: "exam",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Defender XDR",
    question: "Which product is best suited for defending against malicious links and attachments in Microsoft 365 email?",
    options: ["Defender for Office 365", "Defender for Identity", "Sentinel", "Purview DLP"],
    answer: 0,
    explanation: "Defender for Office 365 protects collaboration workloads from phishing, malware, and related threats.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },

  // ── Describe the capabilities of Microsoft compliance solutions ─────
  {
    id: 31,
    type: "learning",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "What is Microsoft Purview in the SC-900 context?",
    options: [
      "A container orchestration platform",
      "A compliance, data governance, and risk solution family",
      "An endpoint antivirus engine",
      "A cloud billing service"
    ],
    answer: 1,
    explanation: "Microsoft Purview provides capabilities across information protection, lifecycle, risk, and eDiscovery.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 32,
    type: "learning",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "What do sensitivity labels help organizations do?",
    options: [
      "Scale virtual machines automatically",
      "Classify and protect data based on sensitivity",
      "Patch Linux kernels",
      "Detect network packet loss"
    ],
    answer: 1,
    explanation: "Sensitivity labels apply protection actions such as encryption, markings, and access restrictions.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 33,
    type: "learning",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "What is the purpose of data loss prevention (DLP)?",
    options: [
      "Compress files for storage savings",
      "Prevent sensitive data from inappropriate sharing or exfiltration",
      "Provision user accounts",
      "Increase mailbox quota"
    ],
    answer: 1,
    explanation: "DLP policies detect sensitive information and enforce actions such as block, warn, or notify.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 34,
    type: "learning",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Data Lifecycle & Records",
    question: "Which Purview capability helps retain or delete content according to policy?",
    options: ["Retention labels and policies", "Conditional Access", "Sentinel watchlists", "Defender TVM"],
    answer: 0,
    explanation: "Retention and records management support data lifecycle controls for legal and business requirements.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 35,
    type: "learning",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Risk & eDiscovery",
    question: "What does eDiscovery primarily support?",
    options: [
      "Endpoint patch management",
      "Legal investigations by searching and exporting relevant content",
      "Identity synchronization",
      "Passwordless sign-in"
    ],
    answer: 1,
    explanation: "eDiscovery helps identify, preserve, review, and export electronically stored information for legal matters.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 36,
    type: "learning",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Risk & eDiscovery",
    question: "What is the goal of insider risk management in Purview?",
    options: [
      "Manage VM backups",
      "Detect and investigate potentially risky user activities",
      "Deploy firewall rules",
      "Rotate service principal secrets"
    ],
    answer: 1,
    explanation: "Insider risk management helps identify and address potentially harmful internal behaviors.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 37,
    type: "exam",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "A tenant wants to automatically block users from sending credit card numbers outside the company in email. Which feature should be used?",
    options: ["Conditional Access", "DLP policy", "Azure Policy", "PIM"],
    answer: 1,
    explanation: "Purview DLP can detect sensitive info types and block or warn on policy violations.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 38,
    type: "exam",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Data Lifecycle & Records",
    question: "Legal requires records to be immutable for seven years. Which approach aligns best?",
    options: [
      "Use temporary access pass",
      "Apply retention labels configured as records",
      "Enable endpoint isolation",
      "Use managed identities"
    ],
    answer: 1,
    explanation: "Records management via retention labels can enforce immutability and regulatory retention requirements.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 39,
    type: "exam",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Risk & eDiscovery",
    question: "Investigators need role-based case management, review sets, and export for legal response. Which Purview capability is relevant?",
    options: ["eDiscovery", "Defender for Cloud", "Entra ID Protection", "Azure Advisor"],
    answer: 0,
    explanation: "Purview eDiscovery provides case workflows and evidence handling for legal investigations.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 40,
    type: "exam",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "Which tool helps map controls and improvement actions against regulatory requirements in Microsoft 365?",
    options: ["Compliance Manager", "Sentinel workbook", "Windows Event Viewer", "Azure Migrate"],
    answer: 0,
    explanation: "Compliance Manager helps assess compliance posture and track remediation actions.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 41,
    type: "exam",
    questionType: "triple_tf",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "For each statement about foundational security concepts, select True or False.",
    statements: [
      "Zero Trust assumes breach and requires explicit verification.",
      "Least privilege means granting users broad access to avoid support tickets.",
      "Defense in depth relies on multiple layers of protection."
    ],
    answer: [true, false, true],
    explanation: "Zero Trust and defense in depth are core principles, while least privilege limits access rather than broadening it.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 42,
    type: "exam",
    questionType: "triple_tf",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Authentication & Access",
    question: "For each statement about Microsoft Entra access controls, select True or False.",
    statements: [
      "Conditional Access can enforce MFA based on sign-in risk or device state.",
      "Self-service password reset helps reduce help desk tickets.",
      "Privileged Identity Management is mainly used to configure data retention labels."
    ],
    answer: [true, true, false],
    explanation: "Conditional Access and SSPR are core Entra capabilities; PIM governs privileged access rather than records retention.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 43,
    type: "exam",
    questionType: "triple_tf",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Microsoft Sentinel",
    question: "For each statement about Microsoft security solutions, select True or False.",
    statements: [
      "Microsoft Sentinel is a cloud-native SIEM and SOAR solution.",
      "Defender for Cloud helps with cloud security posture management.",
      "Defender XDR is primarily a billing optimization product."
    ],
    answer: [true, true, false],
    explanation: "Sentinel and Defender for Cloud are security operations/posture tools, while Defender XDR is for threat detection and response.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 44,
    type: "exam",
    questionType: "triple_tf",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "For each statement about Microsoft Purview compliance capabilities, select True or False.",
    statements: [
      "DLP policies can prevent sharing of sensitive information.",
      "eDiscovery supports legal investigations and case workflows.",
      "Retention labels are used to autoscale virtual machines."
    ],
    answer: [true, true, false],
    explanation: "Purview DLP and eDiscovery are compliance solutions; retention labels govern data lifecycle, not compute scaling.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },

  // ── Additional: Security, compliance, and identity concepts ──────────
  {
    id: 45,
    type: "learning",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "In the shared responsibility model for cloud computing, what is always the customer's responsibility regardless of service type (IaaS, PaaS, SaaS)?",
    options: [
      "Physical datacenter security",
      "Identity, accounts, and data",
      "Host operating system patching",
      "Network hardware maintenance"
    ],
    answer: 1,
    explanation: "Across all cloud service models the customer always owns responsibility for their identities, user accounts, and the data they place in the cloud. The provider takes over increasing layers of the stack as you move from IaaS to SaaS.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 46,
    type: "learning",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "What is the difference between encryption at rest and encryption in transit?",
    options: [
      "Encryption at rest is only used for on-premises servers",
      "Encryption at rest protects stored data; encryption in transit protects data moving across a network",
      "Encryption in transit is stronger and replaces encryption at rest",
      "They are identical concepts with different names"
    ],
    answer: 1,
    explanation: "Encryption at rest protects data stored on disk or in databases from unauthorized access. Encryption in transit (commonly TLS) protects data as it travels between systems. Both layers are needed for a complete data protection strategy.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 47,
    type: "learning",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "What does hashing produce, and how does it differ from encryption?",
    options: [
      "Hashing produces a reversible ciphertext; encryption produces a fixed-length digest",
      "Hashing produces a fixed-length one-way digest; encrypted data can be decrypted with a key",
      "Hashing and encryption are the same cryptographic operation",
      "Hashing is only used for disk encryption"
    ],
    answer: 1,
    explanation: "Hashing converts input into a fixed-length digest that cannot be reversed. It is used for password storage and integrity verification. Encryption is reversible using a key and is used for confidentiality.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 48,
    type: "learning",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "Which attack type attempts to overwhelm a service with excessive traffic to make it unavailable?",
    options: [
      "Phishing",
      "Man-in-the-middle",
      "Distributed denial of service (DDoS)",
      "SQL injection"
    ],
    answer: 2,
    explanation: "A DDoS attack floods a service with traffic from many sources to exhaust its resources and deny access to legitimate users. Phishing tricks users into revealing credentials; man-in-the-middle intercepts communication; SQL injection targets databases.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 49,
    type: "learning",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "Which attack technique uses deceptive emails or websites to trick users into revealing credentials?",
    options: [
      "Brute force",
      "Phishing",
      "Ransomware",
      "Privilege escalation"
    ],
    answer: 1,
    explanation: "Phishing uses fraudulent communications that appear to come from a trusted source to steal credentials or install malware. It is one of the most common attack vectors and is mitigated by MFA, security awareness training, and email filtering.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 50,
    type: "learning",
    topic: "Describe security, compliance, and identity concepts",
    module: "Compliance Concepts",
    question: "What do Governance, Risk, and Compliance (GRC) programs primarily help organizations manage?",
    options: [
      "Application deployment pipelines",
      "Policies, risks, and adherence to regulations and standards",
      "Network routing and latency optimization",
      "Hardware procurement budgets"
    ],
    answer: 1,
    explanation: "GRC frameworks help organizations establish policies (governance), identify and mitigate threats (risk management), and demonstrate adherence to laws and standards (compliance). Microsoft Purview Compliance Manager supports GRC activities.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 51,
    type: "exam",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "A company migrates to a PaaS cloud database. Which security area does the cloud provider now manage that was previously the customer's responsibility on-premises?",
    options: [
      "Who can access the data",
      "The data classification labels applied to records",
      "The underlying operating system and platform patching",
      "Regulatory compliance reporting for the data"
    ],
    answer: 2,
    explanation: "With PaaS, the cloud provider manages the underlying platform, OS, and infrastructure. The customer retains responsibility for data, access control, and compliance reporting.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 52,
    type: "exam",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "A ransomware attack has encrypted all files on the file server. What is the primary impact that makes this attack so damaging?",
    options: [
      "Network bandwidth is consumed permanently",
      "Attackers gain permanent administrative control of all devices",
      "Data is inaccessible until a ransom is paid or backups are restored",
      "All user passwords are immediately changed"
    ],
    answer: 2,
    explanation: "Ransomware encrypts victim data and demands payment for the decryption key. The primary harm is loss of access to critical data. Organisations without good backups face severe disruption.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 53,
    type: "exam",
    questionType: "triple_tf",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "For each statement about encryption and hashing, select True or False.",
    statements: [
      "Hashing is a one-way operation and cannot be reversed to the original value.",
      "Encryption at rest protects data while it is stored on disk or in a database.",
      "Encryption in transit is only required for on-premises networks, not cloud services."
    ],
    answer: [true, true, false],
    explanation: "Hashing is irreversible and used for integrity/password storage. Encryption at rest protects stored data. Encryption in transit is equally important in cloud environments and uses protocols such as TLS.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },

  // ── Additional: Microsoft Entra capabilities ─────────────────────────
  {
    id: 54,
    type: "learning",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Entra ID Fundamentals",
    question: "What is a managed identity in Microsoft Entra ID?",
    options: [
      "A shared administrator account for all Azure services",
      "An identity automatically managed by Azure that applications use to authenticate to services without storing credentials",
      "A guest user identity from an external organization",
      "A user account that requires manual password rotation"
    ],
    answer: 1,
    explanation: "Managed identities eliminate the need for developers to manage credentials. Azure automatically handles the lifecycle of the identity, which services use to authenticate to other Azure resources securely.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 55,
    type: "learning",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Entra ID Fundamentals",
    question: "What does Microsoft Entra Connect (formerly Azure AD Connect) enable?",
    options: [
      "Passwordless sign-in only for cloud-native accounts",
      "Synchronisation of on-premises Active Directory identities to Microsoft Entra ID for hybrid identity",
      "Automatic deletion of stale guest accounts",
      "Just-in-time privileged access for administrators"
    ],
    answer: 1,
    explanation: "Entra Connect synchronises on-premises AD user accounts, groups, and password hashes (or federated trust) to Entra ID, creating a hybrid identity solution that lets users use one identity on-premises and in the cloud.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 56,
    type: "learning",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Authentication & Access",
    question: "Which passwordless authentication method uses a hardware key or biometric that is bound to a specific device?",
    options: [
      "SMS one-time passcode",
      "FIDO2 security key",
      "Email verification link",
      "Password + security question"
    ],
    answer: 1,
    explanation: "FIDO2 security keys (such as YubiKey) use public-key cryptography tied to a physical device. Windows Hello for Business also uses a device-bound biometric/PIN. Both are phishing-resistant passwordless methods supported by Microsoft Entra.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 57,
    type: "learning",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Authentication & Access",
    question: "What is role-based access control (RBAC) in Entra ID?",
    options: [
      "A method to block all external users from the tenant",
      "Granting permissions to users based on their assigned roles rather than individual assignments",
      "Automatic license assignment for premium users",
      "A tool for monitoring failed sign-in attempts"
    ],
    answer: 1,
    explanation: "RBAC assigns permissions through roles (e.g., Global Administrator, Security Reader). Users inherit the permissions defined in their role, making access management scalable and easier to audit than individual permission assignments.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 58,
    type: "learning",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Authentication & Access",
    question: "What does Microsoft Entra ID Protection detect?",
    options: [
      "Malware on physical devices",
      "Risky sign-ins and compromised user identities using machine learning signals",
      "Sensitive files shared with external parties",
      "Outdated operating systems on endpoints"
    ],
    answer: 1,
    explanation: "Entra ID Protection uses Microsoft's threat intelligence to detect risky sign-ins (e.g., sign-in from anonymous IP, unfamiliar location) and risky users (e.g., leaked credentials). It can trigger Conditional Access policies automatically.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 59,
    type: "learning",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Entra ID Fundamentals",
    question: "What is the purpose of Microsoft Entra External ID?",
    options: [
      "Managing privileged administrator accounts",
      "Providing identity services for partners, guests, and external customers (B2B and B2C scenarios)",
      "Synchronising on-premises AD to the cloud",
      "Monitoring internal user sign-in risk"
    ],
    answer: 1,
    explanation: "Entra External ID covers B2B collaboration (partners/guests using their own identity to access your resources) and B2C (customers using social or local accounts to access your apps). It extends the identity perimeter beyond your employees.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 60,
    type: "exam",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Entra ID Fundamentals",
    question: "A developer needs an Azure Function app to read secrets from Azure Key Vault without storing any credentials in code. Which Entra capability enables this?",
    options: [
      "Conditional Access policy",
      "Managed identity",
      "Self-service password reset",
      "Privileged Identity Management"
    ],
    answer: 1,
    explanation: "A system-assigned or user-assigned managed identity gives the Function app an automatically managed Entra ID identity. This identity can be granted access to Key Vault, removing the need to store credentials in code or configuration.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 61,
    type: "exam",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Authentication & Access",
    question: "A company wants to eliminate passwords for employees signing in to Windows and Microsoft 365. Which authentication methods could achieve this? (Choose the best answer.)",
    options: [
      "Requiring longer minimum password length",
      "Windows Hello for Business or FIDO2 security keys",
      "Sending OTP codes via email only",
      "Enforcing password expiration every 30 days"
    ],
    answer: 1,
    explanation: "Windows Hello for Business (biometric/PIN bound to the device) and FIDO2 security keys are phishing-resistant passwordless methods supported in Microsoft Entra ID for employees.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 62,
    type: "exam",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Entra ID Fundamentals",
    question: "A business partner needs access to an internal SharePoint site using their own company credentials. Which Entra External ID scenario applies?",
    options: [
      "B2C – customer identity and access management",
      "B2B – external collaboration using the partner's identity",
      "Managed identity – service-to-service authentication",
      "Hybrid identity – on-premises AD synchronisation"
    ],
    answer: 1,
    explanation: "Entra External ID B2B lets partners and guests use their own organisational credentials (or Microsoft/social accounts) to access your resources. B2C is for consumer-facing applications; managed identities are for app/service authentication.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 63,
    type: "exam",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Authentication & Access",
    question: "Entra ID Protection detects that a user's credentials appear in a known breach list. What action can it trigger automatically?",
    options: [
      "Permanently delete the user account",
      "Require the user to complete MFA or reset their password via a Conditional Access policy",
      "Send the credentials to the security team in plain text",
      "Disable all Conditional Access policies"
    ],
    answer: 1,
    explanation: "When Entra ID Protection marks a user as high-risk (e.g., leaked credentials), a risk-based Conditional Access policy can automatically require MFA or a secure password reset before granting access, protecting the compromised account.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 64,
    type: "exam",
    questionType: "triple_tf",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Entra ID Fundamentals",
    question: "For each statement about Microsoft Entra identity types and hybrid identity, select True or False.",
    statements: [
      "Managed identities allow Azure services to authenticate to other Azure services without storing credentials in code.",
      "Microsoft Entra Connect synchronises on-premises Active Directory identities to Microsoft Entra ID.",
      "External ID B2B requires guest users to create a new Microsoft account before accessing shared resources."
    ],
    answer: [true, true, false],
    explanation: "Managed identities remove credential management from developers. Entra Connect enables hybrid identity. External ID B2B lets guests use their own existing identity (work, school, or social account) – no new account is required.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },

  // ── Additional: Microsoft security solutions ─────────────────────────
  {
    id: 65,
    type: "learning",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Azure Network Security",
    question: "What does Azure DDoS Protection provide?",
    options: [
      "Endpoint antivirus scanning for virtual machines",
      "Mitigation of volumetric, protocol, and application-layer DDoS attacks against Azure resources",
      "Encryption of data stored in Azure Storage",
      "Identity-based access control for Azure resources"
    ],
    answer: 1,
    explanation: "Azure DDoS Protection monitors traffic to detect and mitigate DDoS attacks in real time. The Standard tier adds enhanced mitigation, attack analytics, rapid response support, and cost protection.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 66,
    type: "learning",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Azure Network Security",
    question: "What is a Network Security Group (NSG) in Azure?",
    options: [
      "A physical firewall appliance installed in the datacenter",
      "A set of rules that allow or deny inbound and outbound network traffic to Azure resources",
      "A tool for monitoring application performance",
      "A compliance dashboard for regulatory requirements"
    ],
    answer: 1,
    explanation: "NSGs contain security rules based on source/destination IP, port, and protocol. They are applied to subnets or individual network interfaces to control traffic flow within Azure virtual networks.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 67,
    type: "learning",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Azure Network Security",
    question: "How does Azure Firewall differ from a Network Security Group (NSG)?",
    options: [
      "Azure Firewall is only for on-premises networks; NSGs are only for cloud",
      "Azure Firewall is a fully managed, stateful firewall service with FQDN filtering and threat intelligence; NSGs are basic traffic filtering rules",
      "NSGs provide application-layer protection; Azure Firewall only filters by IP",
      "They are identical in functionality"
    ],
    answer: 1,
    explanation: "Azure Firewall is a managed cloud-native network security service with stateful inspection, FQDN/URL filtering, threat intelligence integration, and centralised policy management. NSGs provide lighter-weight allow/deny rules at the subnet or NIC level.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 68,
    type: "learning",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Azure Network Security",
    question: "What is the primary security benefit of Azure Bastion?",
    options: [
      "It encrypts data stored in Azure Blob Storage",
      "It provides secure RDP/SSH connectivity to Azure VMs directly from the Azure portal without exposing public IP ports",
      "It monitors user sign-in risk scores",
      "It enforces compliance policies across subscriptions"
    ],
    answer: 1,
    explanation: "Azure Bastion provides browser-based RDP and SSH access to virtual machines inside the Azure portal, eliminating the need to expose VM management ports (3389, 22) to the public internet and reducing the attack surface.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 69,
    type: "learning",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Azure Network Security",
    question: "What does Azure Key Vault store and protect?",
    options: [
      "Virtual machine disk images",
      "Secrets, keys, and certificates for applications and services",
      "User passwords and sign-in credentials",
      "Network security group rule sets"
    ],
    answer: 1,
    explanation: "Azure Key Vault is a managed service for storing and accessing secrets (connection strings, API keys), cryptographic keys (used for encryption), and certificates. It integrates with Entra ID for access control and supports hardware security modules (HSMs).",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 70,
    type: "learning",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Defender XDR",
    question: "What role does Microsoft Defender for Cloud Apps play in an organisation's security architecture?",
    options: [
      "It manages on-premises firewall rules",
      "It acts as a Cloud Access Security Broker (CASB) to provide visibility and control over cloud app usage and data",
      "It replaces on-premises antivirus software",
      "It provides physical access control to datacenters"
    ],
    answer: 1,
    explanation: "Defender for Cloud Apps is Microsoft's CASB solution. It discovers shadow IT (unsanctioned cloud apps), monitors user activities in cloud apps, enforces DLP policies, and detects anomalous behaviour across SaaS applications.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 71,
    type: "learning",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Defender XDR",
    question: "What is the primary function of Microsoft Intune in the Microsoft security ecosystem?",
    options: [
      "Sending phishing simulation emails to employees",
      "Cloud-based endpoint and mobile device management that enforces compliance policies",
      "Providing SQL database security monitoring",
      "Managing Entra ID external guest access policies"
    ],
    answer: 1,
    explanation: "Microsoft Intune enables organisations to manage and secure devices (Windows, macOS, iOS, Android) and apps through the cloud. It enforces compliance policies, controls app access, and integrates with Conditional Access to ensure only compliant devices can reach corporate resources.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 72,
    type: "exam",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Azure Network Security",
    question: "A team needs to connect securely to Azure VMs for administration without opening RDP ports to the internet. Which Azure service should they use?",
    options: [
      "Azure VPN Gateway",
      "Azure Bastion",
      "Network Security Group",
      "Azure Front Door"
    ],
    answer: 1,
    explanation: "Azure Bastion provides RDP and SSH access directly through the Azure portal over TLS without requiring VMs to have public IP addresses or exposed management ports, significantly reducing the attack surface.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 73,
    type: "exam",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Azure Network Security",
    question: "An application stores database connection strings and API keys. A developer wants to remove these from the application's source code. Which Azure service should store these values?",
    options: [
      "Azure Blob Storage",
      "Azure Key Vault",
      "Microsoft Entra ID",
      "Azure Policy"
    ],
    answer: 1,
    explanation: "Azure Key Vault is the designated service for storing application secrets, keys, and certificates. Applications authenticate to Key Vault via managed identity, removing the need to embed credentials in source code.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 74,
    type: "exam",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Defender XDR",
    question: "The security team discovers employees are using unauthorised cloud storage services to share company files. Which Microsoft solution is most appropriate for discovering and controlling this shadow IT usage?",
    options: [
      "Microsoft Sentinel",
      "Microsoft Defender for Cloud Apps",
      "Azure DDoS Protection",
      "Azure Bastion"
    ],
    answer: 1,
    explanation: "Defender for Cloud Apps (CASB) discovers cloud app usage across the organisation, categorises apps as sanctioned or unsanctioned, and can block or monitor access to shadow IT applications to prevent data leakage.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 75,
    type: "exam",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Defender XDR",
    question: "A company wants to ensure that only devices enrolled in Intune and marked as compliant can access Microsoft 365 services. How is this achieved?",
    options: [
      "By enabling security defaults in Entra ID",
      "By creating a Conditional Access policy that requires a compliant device, enforced through Intune",
      "By configuring a DLP policy in Microsoft Purview",
      "By enabling Defender for Identity on-premises sensor"
    ],
    answer: 1,
    explanation: "Intune reports device compliance status to Entra ID. A Conditional Access policy can then require a 'compliant device' as a grant control, blocking or granting access to Microsoft 365 based on the Intune compliance state.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 76,
    type: "exam",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Azure Network Security",
    question: "An organisation hosting a public-facing web app on Azure has experienced volumetric DDoS attacks. Which service should they enable to protect against future attacks?",
    options: [
      "Azure Firewall",
      "Network Security Group",
      "Azure DDoS Protection",
      "Microsoft Sentinel"
    ],
    answer: 2,
    explanation: "Azure DDoS Protection Standard provides always-on traffic monitoring and real-time mitigation of DDoS attacks against public IP addresses. It includes attack analytics, rapid response support, and cost protection for scaling caused by DDoS traffic.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 77,
    type: "exam",
    questionType: "triple_tf",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Azure Network Security",
    question: "For each statement about Azure network security services, select True or False.",
    statements: [
      "Network Security Groups filter traffic using rules based on IP address, port, and protocol.",
      "Azure Bastion eliminates the need to expose RDP or SSH ports on Azure virtual machines to the internet.",
      "Azure Key Vault is primarily a network traffic filtering service."
    ],
    answer: [true, true, false],
    explanation: "NSGs provide rule-based network filtering. Azure Bastion enables secure management access without public ports. Azure Key Vault stores secrets, keys, and certificates – it is not a network filtering service.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 78,
    type: "exam",
    questionType: "triple_tf",
    topic: "Describe the capabilities of Microsoft security solutions",
    module: "Defender XDR",
    question: "For each statement about Microsoft endpoint and cloud app security, select True or False.",
    statements: [
      "Microsoft Intune is a cloud-based service for managing and securing devices and apps.",
      "Defender for Cloud Apps can discover unsanctioned cloud applications used in an organisation (shadow IT).",
      "Defender for Endpoint is designed specifically to protect email from phishing attacks."
    ],
    answer: [true, true, false],
    explanation: "Intune manages endpoints; Defender for Cloud Apps provides CASB capabilities including shadow IT discovery. Defender for Endpoint protects endpoints (desktops, servers) from malware and attacks – email phishing protection is the role of Defender for Office 365.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },

  // ── Additional: Microsoft compliance solutions ───────────────────────
  {
    id: 79,
    type: "learning",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "What is the Microsoft Service Trust Portal?",
    options: [
      "A portal for managing Azure subscriptions and billing",
      "A public portal providing audit reports, compliance certifications, and trust documents about Microsoft cloud services",
      "An internal tool used only by Microsoft employees",
      "A portal for configuring Purview DLP policies"
    ],
    answer: 1,
    explanation: "The Service Trust Portal (STP) provides customers with access to audit reports (SOC, ISO, FedRAMP), compliance guides, whitepapers, and pen test results for Microsoft cloud services, helping organisations assess their compliance posture.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 80,
    type: "learning",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "What does Microsoft Purview Communication Compliance help organisations achieve?",
    options: [
      "Blocking spam email from reaching users' inboxes",
      "Detecting potentially inappropriate or policy-violating content in communications such as Teams and email",
      "Encrypting all messages automatically",
      "Preventing external file sharing in SharePoint"
    ],
    answer: 1,
    explanation: "Communication Compliance uses machine learning to detect content that may violate regulatory requirements or corporate policies (e.g., harassment, insider trading language) across Microsoft 365 communication channels.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 81,
    type: "learning",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Risk & eDiscovery",
    question: "What does Microsoft Purview Audit provide?",
    options: [
      "Automatic remediation of security vulnerabilities",
      "A searchable record of user and admin activities across Microsoft 365 services",
      "Encryption key management for documents",
      "Device compliance status for Intune-enrolled devices"
    ],
    answer: 1,
    explanation: "Purview Audit captures and retains audit records for user, admin, and system activities across Exchange, SharePoint, Teams, Entra ID, and more. The records can be searched and exported for forensic investigation and regulatory requirements.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 82,
    type: "learning",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "What are information barriers in Microsoft Purview?",
    options: [
      "Physical barriers restricting access to server rooms",
      "Policies that restrict communication between specific groups to prevent conflicts of interest",
      "Network firewall rules for blocking internet access",
      "Watermarks applied to sensitive documents"
    ],
    answer: 1,
    explanation: "Information barriers are policies that prevent defined groups from communicating or collaborating in Microsoft Teams, SharePoint, and OneDrive. They are used in regulated industries (e.g., financial services) to prevent conflicts of interest.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 83,
    type: "learning",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "What is the Microsoft Compliance Manager primarily used for?",
    options: [
      "Monitoring endpoint security posture scores",
      "Assessing compliance posture against regulatory requirements and tracking improvement actions",
      "Managing Microsoft 365 licence assignments",
      "Configuring Conditional Access policies"
    ],
    answer: 1,
    explanation: "Compliance Manager provides a compliance score, pre-built regulatory assessments (GDPR, ISO 27001, NIST, etc.), and a tracking tool for improvement actions, helping organisations understand and manage their compliance obligations.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 84,
    type: "exam",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "A financial services firm needs to ensure that investment bankers and research analysts cannot exchange messages due to potential conflicts of interest. Which Microsoft Purview feature addresses this?",
    options: [
      "Sensitivity labels",
      "Information barriers",
      "DLP policies",
      "Retention labels"
    ],
    answer: 1,
    explanation: "Information barriers define segments of users and restrict communication between defined segments (e.g., investment banking and research) in Teams, SharePoint, and OneDrive to prevent regulatory violations around conflicts of interest.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 85,
    type: "exam",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "A compliance officer needs to obtain Microsoft's SOC 2 audit report to verify controls for a cloud service. Where should they look?",
    options: [
      "Microsoft Defender for Cloud secure score",
      "Microsoft Purview Compliance Manager assessments",
      "Microsoft Service Trust Portal",
      "Microsoft Entra admin centre"
    ],
    answer: 2,
    explanation: "The Service Trust Portal hosts independently produced audit reports (SOC, ISO, FedRAMP, etc.), compliance guides, and other trust documentation for Microsoft cloud services. Compliance Manager tracks the organisation's own compliance posture.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 86,
    type: "exam",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Risk & eDiscovery",
    question: "An HR investigation requires reviewing Teams messages and emails exchanged by a specific employee over the past 90 days. Which Purview capability is most appropriate?",
    options: [
      "Sensitivity labels",
      "Purview eDiscovery",
      "Compliance Manager",
      "Retention policies"
    ],
    answer: 1,
    explanation: "Purview eDiscovery allows authorised investigators to search, preserve, review, and export content from Microsoft 365 services for specific users and time ranges, supporting legal hold and investigation workflows.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 87,
    type: "exam",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "A company wants to track its GDPR compliance, view improvement actions, and get a compliance score in Microsoft 365. Which tool fulfils this need?",
    options: [
      "Microsoft Defender for Cloud",
      "Microsoft Purview Compliance Manager",
      "Azure Policy",
      "Microsoft Sentinel"
    ],
    answer: 1,
    explanation: "Compliance Manager provides pre-built GDPR (and many other regulatory) assessments, a compliance score reflecting current posture, and actionable improvement tasks mapped to specific controls.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 88,
    type: "exam",
    questionType: "triple_tf",
    topic: "Describe the capabilities of Microsoft compliance solutions",
    module: "Microsoft Purview",
    question: "For each statement about Microsoft compliance capabilities, select True or False.",
    statements: [
      "The Microsoft Service Trust Portal provides access to independent audit reports such as SOC and ISO certifications for Microsoft cloud services.",
      "Communication Compliance in Purview can detect potentially inappropriate messages in Teams and email.",
      "Information barriers are used to encrypt email attachments before they leave the organisation."
    ],
    answer: [true, true, false],
    explanation: "The STP hosts audit reports; Communication Compliance detects policy-violating content in communications. Information barriers restrict communication between defined groups – encryption of attachments is the role of sensitivity labels with encryption applied.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 89,
    type: "exam",
    questionType: "triple_tf",
    topic: "Describe the capabilities of Microsoft Entra",
    module: "Authentication & Access",
    question: "For each statement about Microsoft Entra authentication and access capabilities, select True or False.",
    statements: [
      "Entra ID Protection uses machine learning to detect risky sign-ins and compromised user accounts.",
      "RBAC in Entra ID grants access based on roles rather than individual user permission assignments.",
      "Self-service password reset (SSPR) requires IT administrators to manually approve every password reset request."
    ],
    answer: [true, true, false],
    explanation: "Entra ID Protection automates risk detection. RBAC assigns permissions through roles for scalable access management. SSPR allows users to reset passwords themselves without administrator approval, reducing help desk load.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  },
  {
    id: 90,
    type: "exam",
    questionType: "triple_tf",
    topic: "Describe security, compliance, and identity concepts",
    module: "Security Concepts",
    question: "For each statement about the shared responsibility model and common threats, select True or False.",
    statements: [
      "In the shared responsibility model, the customer is always responsible for their own data and identities regardless of the cloud service model.",
      "A DDoS attack aims to make a service unavailable by overwhelming it with traffic.",
      "Phishing attacks primarily target network infrastructure rather than human users."
    ],
    answer: [true, true, false],
    explanation: "Customer data and identity responsibility never transfers to the cloud provider. DDoS attacks flood services to cause unavailability. Phishing targets human users through deceptive messages – it is a social engineering attack, not a network infrastructure attack.",
    learnUrl: "https://learn.microsoft.com/training/courses/sc-900t00",
    pageUrl: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/"
  }
];
