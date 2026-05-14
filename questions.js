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
  }
];
