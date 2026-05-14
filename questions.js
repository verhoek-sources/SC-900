const QUESTIONS = [
  // ── Describe the concepts of security, compliance, and identity (10–15%) ──
  {
    id: 1,
    type: "learning",
    topic: "Security, Compliance, and Identity Concepts",
    module: "Security & Compliance Concepts",
    question: "Which statement best describes the Zero Trust security model?",
    options: [
      "Trust users by default after they authenticate once",
      "Verify explicitly, use least privilege, and assume breach",
      "Secure only network perimeters and edge firewalls",
      "Allow full internal access for managed devices"
    ],
    answer: 1,
    explanation: "Zero Trust is based on verify explicitly, least-privileged access, and assume breach. Access decisions continuously evaluate identity, device, data, and risk signals.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/"
  },
  {
    id: 2,
    type: "learning",
    topic: "Security, Compliance, and Identity Concepts",
    module: "Security & Compliance Concepts",
    question: "In the shared responsibility model for SaaS, what is typically Microsoft's responsibility?",
    options: [
      "Configuring customer data classification labels",
      "Managing endpoint antivirus on customer devices",
      "Operating and securing the underlying cloud infrastructure",
      "Approving customer access review decisions"
    ],
    answer: 2,
    explanation: "In SaaS, Microsoft manages most of the stack including infrastructure, platform, and application availability/security. Customers remain responsible for data governance and access configuration.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/"
  },
  {
    id: 3,
    type: "learning",
    topic: "Security, Compliance, and Identity Concepts",
    module: "Security & Compliance Concepts",
    question: "What is the primary purpose of defense-in-depth?",
    options: [
      "Reduce costs by using one centralized control",
      "Provide multiple layers of controls so one failure doesn't expose everything",
      "Replace identity controls with network controls",
      "Eliminate the need for security monitoring"
    ],
    answer: 1,
    explanation: "Defense-in-depth applies multiple control layers (identity, network, compute, data, monitoring) to limit the blast radius if one control is bypassed.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/"
  },
  {
    id: 4,
    type: "exam",
    topic: "Security, Compliance, and Identity Concepts",
    module: "Security & Compliance Concepts",
    question: "A company must keep data in a specific country due to legal requirements. Which concept is MOST relevant?",
    options: [
      "Data minimization",
      "Data sovereignty",
      "Business continuity",
      "Data anonymization"
    ],
    answer: 1,
    explanation: "Data sovereignty refers to data being subject to the laws and governance requirements of the country/region where it is stored.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/"
  },
  {
    id: 5,
    type: "learning",
    topic: "Security, Compliance, and Identity Concepts",
    module: "Identity Concepts",
    question: "What is authentication?",
    options: [
      "Granting permissions to resources",
      "Verifying a user's identity",
      "Encrypting data in storage",
      "Monitoring suspicious activity"
    ],
    answer: 1,
    explanation: "Authentication proves who the user is. Authorization determines what that authenticated identity can do.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-identity-concepts/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-identity-concepts/"
  },
  {
    id: 6,
    type: "exam",
    topic: "Security, Compliance, and Identity Concepts",
    module: "Identity Concepts",
    question: "Which technology enables users to access multiple applications after signing in once?",
    options: ["Federation", "Single sign-on (SSO)", "Network segmentation", "Conditional Access"],
    answer: 1,
    explanation: "Single sign-on (SSO) reduces repeated sign-ins by reusing a trusted authentication token across applications.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-identity-concepts/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-identity-concepts/"
  },

  // ── Describe the capabilities of Microsoft Entra (25–30%) ──
  {
    id: 7,
    type: "learning",
    topic: "Microsoft Entra Capabilities",
    module: "Entra ID Fundamentals",
    question: "What is Microsoft Entra ID primarily used for?",
    options: [
      "Physical datacenter access control",
      "Cloud identity and access management",
      "SQL database backup scheduling",
      "Hardware inventory management"
    ],
    answer: 1,
    explanation: "Microsoft Entra ID is Microsoft's cloud identity and access management service for users, groups, apps, and devices.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-functionality-identity-types-microsoft-entra-id/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-functionality-identity-types-microsoft-entra-id/"
  },
  {
    id: 8,
    type: "learning",
    topic: "Microsoft Entra Capabilities",
    module: "Entra ID Fundamentals",
    question: "Which identity type is best for an application that needs to authenticate to Azure resources without storing passwords?",
    options: ["Guest user", "Managed identity", "B2B account", "External ID"],
    answer: 1,
    explanation: "Managed identities let workloads authenticate to Azure services using Entra-issued tokens, avoiding embedded secrets.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-functionality-identity-types-microsoft-entra-id/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-functionality-identity-types-microsoft-entra-id/"
  },
  {
    id: 9,
    type: "exam",
    topic: "Microsoft Entra Capabilities",
    module: "Entra ID Fundamentals",
    question: "A partner user signs in to your tenant using their existing organization account. This is an example of:",
    options: ["B2C collaboration", "B2B collaboration", "Privileged Identity Management", "Self-service password reset"],
    answer: 1,
    explanation: "B2B collaboration supports external users from partner organizations using their home credentials.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-functionality-identity-types-microsoft-entra-id/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-functionality-identity-types-microsoft-entra-id/"
  },
  {
    id: 10,
    type: "learning",
    topic: "Microsoft Entra Capabilities",
    module: "Entra Authentication",
    question: "Which control most directly reduces account compromise from stolen passwords?",
    options: ["MFA", "Role assignment", "Resource tagging", "Log retention"],
    answer: 0,
    explanation: "Multi-factor authentication requires an additional factor beyond password, significantly reducing password-based attacks.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-authentication-capabilities-microsoft-entra-id/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-authentication-capabilities-microsoft-entra-id/"
  },
  {
    id: 11,
    type: "learning",
    topic: "Microsoft Entra Capabilities",
    module: "Entra Authentication",
    question: "What is passwordless authentication in Microsoft Entra?",
    options: [
      "Logging in without identity verification",
      "Authenticating using methods such as FIDO2 keys or Windows Hello instead of passwords",
      "Using shared admin credentials",
      "Automatically approving all sign-ins"
    ],
    answer: 1,
    explanation: "Passwordless methods replace reusable passwords with stronger factors like biometrics, passkeys, or hardware keys.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-authentication-capabilities-microsoft-entra-id/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-authentication-capabilities-microsoft-entra-id/"
  },
  {
    id: 12,
    type: "exam",
    topic: "Microsoft Entra Capabilities",
    module: "Entra Authentication",
    question: "A user forgets their password and resets it after verifying identity with registered methods. Which feature is used?",
    options: ["Conditional Access", "Self-service password reset (SSPR)", "Entitlement management", "Privileged access group"],
    answer: 1,
    explanation: "SSPR allows users to reset passwords independently after verification, reducing helpdesk load.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-authentication-capabilities-microsoft-entra-id/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-authentication-capabilities-microsoft-entra-id/"
  },
  {
    id: 13,
    type: "learning",
    topic: "Microsoft Entra Capabilities",
    module: "Entra Access Management",
    question: "What is the primary purpose of Conditional Access?",
    options: [
      "Backup Entra tenant data",
      "Apply access decisions based on signals like user, location, device, and risk",
      "Create static firewall rules",
      "Rotate application certificates"
    ],
    answer: 1,
    explanation: "Conditional Access enforces policy-based access decisions using real-time conditions and controls like MFA.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-access-management-capabilities-microsoft-entra/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-access-management-capabilities-microsoft-entra/"
  },
  {
    id: 14,
    type: "learning",
    topic: "Microsoft Entra Capabilities",
    module: "Entra Access Management",
    question: "Which Microsoft Entra feature enables just-in-time elevation for privileged roles?",
    options: ["Access reviews", "Privileged Identity Management (PIM)", "SSPR", "B2B collaboration"],
    answer: 1,
    explanation: "PIM provides time-bound, approval-based activation of privileged roles to reduce standing admin access.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-access-management-capabilities-microsoft-entra/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-access-management-capabilities-microsoft-entra/"
  },
  {
    id: 15,
    type: "learning",
    topic: "Microsoft Entra Capabilities",
    module: "Entra Access Management",
    question: "What is an access review used for?",
    options: [
      "Scanning devices for malware",
      "Periodically validating whether users still need access",
      "Encrypting emails with sensitivity labels",
      "Monitoring SQL query performance"
    ],
    answer: 1,
    explanation: "Access reviews help organizations regularly attest and remove unnecessary access to groups, apps, and roles.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-access-management-capabilities-microsoft-entra/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-access-management-capabilities-microsoft-entra/"
  },
  {
    id: 16,
    type: "exam",
    topic: "Microsoft Entra Capabilities",
    module: "Entra Access Management",
    question: "A project team needs temporary access to a SharePoint site with automatic expiration and approval workflow. Which capability fits best?",
    options: ["Entitlement management", "MFA registration policy", "Identity Protection", "Named locations"],
    answer: 0,
    explanation: "Entitlement management packages access with approval, lifecycle, and expiration controls for internal/external users.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-access-management-capabilities-microsoft-entra/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-access-management-capabilities-microsoft-entra/"
  },
  {
    id: 17,
    type: "learning",
    topic: "Microsoft Entra Capabilities",
    module: "Entra Identity Protection & Governance",
    question: "What does Microsoft Entra ID Protection primarily provide?",
    options: [
      "Static network ACL templates",
      "Risk-based detection and automated responses for identities",
      "Backup and disaster recovery orchestration",
      "Device BIOS patch management"
    ],
    answer: 1,
    explanation: "Entra ID Protection detects risky sign-ins/users and enables automated remediation like MFA or password reset.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities-microsoft-entra/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities-microsoft-entra/"
  },
  {
    id: 18,
    type: "learning",
    topic: "Microsoft Entra Capabilities",
    module: "Entra Identity Protection & Governance",
    question: "Which governance control helps ensure privileged access is approved and time-limited?",
    options: ["PIM", "Defender for Cloud", "Sentinel connector", "Data Loss Prevention"],
    answer: 0,
    explanation: "PIM governance capabilities include approval workflows, just-in-time access, and audit trails for privileged roles.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities-microsoft-entra/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities-microsoft-entra/"
  },
  {
    id: 19,
    type: "exam",
    topic: "Microsoft Entra Capabilities",
    module: "Entra Identity Protection & Governance",
    question: "Your organization wants to block sign-ins with high user risk and force password reset for medium risk. Which capability should you use?",
    options: ["Identity Protection risk policies", "Information barriers", "Sensitivity labels", "Azure Policy initiatives"],
    answer: 0,
    explanation: "Identity Protection risk policies can require remediation or block access based on sign-in/user risk levels.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities-microsoft-entra/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities-microsoft-entra/"
  },
  {
    id: 20,
    type: "learning",
    topic: "Microsoft Entra Capabilities",
    module: "Entra Authentication",
    question: "What is a key benefit of Microsoft Authenticator number matching for MFA prompts?",
    options: [
      "Disables all push notifications",
      "Reduces MFA fatigue and accidental approvals",
      "Eliminates the need for Conditional Access",
      "Automatically grants admin privileges"
    ],
    answer: 1,
    explanation: "Number matching helps prevent prompt bombing attacks by requiring user interaction with a displayed number.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-authentication-capabilities-microsoft-entra-id/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-authentication-capabilities-microsoft-entra-id/"
  },

  // ── Describe the capabilities of Microsoft security solutions (30–35%) ──
  {
    id: 21,
    type: "learning",
    topic: "Microsoft Security Solutions",
    module: "Security Copilot",
    question: "What is Microsoft Security Copilot designed to do?",
    options: [
      "Replace all SIEM and XDR tooling",
      "Use generative AI to assist security operations and investigations",
      "Act as a consumer chatbot for office productivity",
      "Manage Azure billing and reservations"
    ],
    answer: 1,
    explanation: "Security Copilot uses AI grounded in security data to help analysts investigate, summarize incidents, and improve response speed.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-microsoft-security-copilot/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-microsoft-security-copilot/"
  },
  {
    id: 22,
    type: "exam",
    topic: "Microsoft Security Solutions",
    module: "Azure Infrastructure Security",
    question: "Which Azure service protects virtual networks from volumetric and protocol-level DDoS attacks?",
    options: ["Azure Bastion", "Azure DDoS Protection", "Azure Policy", "Microsoft Purview"],
    answer: 1,
    explanation: "Azure DDoS Protection helps protect internet-facing resources from distributed denial-of-service attacks.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-infrastructure-security-services-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-infrastructure-security-services-azure/"
  },
  {
    id: 23,
    type: "learning",
    topic: "Microsoft Security Solutions",
    module: "Azure Infrastructure Security",
    question: "What is the primary role of a Network Security Group (NSG)?",
    options: [
      "Classify documents with sensitivity labels",
      "Filter network traffic to and from Azure resources",
      "Aggregate SIEM alerts across tenants",
      "Provide endpoint anti-malware scanning"
    ],
    answer: 1,
    explanation: "NSGs contain inbound and outbound rules to allow or deny network traffic at subnet or NIC level.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-infrastructure-security-services-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-infrastructure-security-services-azure/"
  },
  {
    id: 24,
    type: "learning",
    topic: "Microsoft Security Solutions",
    module: "Azure Infrastructure Security",
    question: "Why is Azure Bastion preferred for VM administrative access over exposing RDP/SSH directly?",
    options: [
      "It reduces VM disk usage",
      "It provides secure browser-based access without public IP exposure on VMs",
      "It replaces Entra authentication",
      "It encrypts all Azure Storage accounts"
    ],
    answer: 1,
    explanation: "Azure Bastion provides managed, secure access to VMs without directly exposing RDP/SSH ports to the internet.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-infrastructure-security-services-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-infrastructure-security-services-azure/"
  },
  {
    id: 25,
    type: "exam",
    topic: "Microsoft Security Solutions",
    module: "Azure Infrastructure Security",
    question: "Which service centrally stores secrets, keys, and certificates for Azure applications?",
    options: ["Azure Monitor", "Azure Key Vault", "Microsoft Sentinel", "Azure Arc"],
    answer: 1,
    explanation: "Azure Key Vault securely stores and controls access to secrets, cryptographic keys, and certificates.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-infrastructure-security-services-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-infrastructure-security-services-azure/"
  },
  {
    id: 26,
    type: "learning",
    topic: "Microsoft Security Solutions",
    module: "Azure Security Management",
    question: "What is Microsoft Defender for Cloud primarily used for?",
    options: [
      "Creating user identities and groups",
      "Posture management and workload protection across cloud resources",
      "Managing legal hold cases",
      "Configuring sensitivity labels"
    ],
    answer: 1,
    explanation: "Defender for Cloud provides CSPM and cloud workload protection recommendations, alerts, and secure score.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-azure/"
  },
  {
    id: 27,
    type: "learning",
    topic: "Microsoft Security Solutions",
    module: "Azure Security Management",
    question: "In Defender for Cloud, what does Secure Score indicate?",
    options: [
      "Total number of blocked sign-ins",
      "Your current security posture based on implemented recommendations",
      "A financial cost metric for controls",
      "The percentage of encrypted files"
    ],
    answer: 1,
    explanation: "Secure Score measures how well recommended security controls are implemented and helps prioritize improvements.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-azure/"
  },
  {
    id: 28,
    type: "exam",
    topic: "Microsoft Security Solutions",
    module: "Azure Security Management",
    question: "A security team wants continuous policy-based security recommendations for Azure, AWS, and GCP assets. Which solution should they use?",
    options: ["Microsoft Defender for Cloud", "Purview eDiscovery", "Entra B2C", "Service Trust Portal"],
    answer: 0,
    explanation: "Defender for Cloud supports multicloud posture management and recommendations across major cloud providers.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-azure/"
  },
  {
    id: 29,
    type: "learning",
    topic: "Microsoft Security Solutions",
    module: "Microsoft Sentinel",
    question: "Which best describes Microsoft Sentinel?",
    options: [
      "A cloud-native SIEM and SOAR platform",
      "A password vault for administrators",
      "A data governance catalog",
      "A replacement for Entra Conditional Access"
    ],
    answer: 0,
    explanation: "Microsoft Sentinel is a cloud-native SIEM/SOAR platform for collecting logs, detecting threats, and orchestrating response.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-capabilities-microsoft-sentinel/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-capabilities-microsoft-sentinel/"
  },
  {
    id: 30,
    type: "learning",
    topic: "Microsoft Security Solutions",
    module: "Microsoft Sentinel",
    question: "What is a Sentinel data connector used for?",
    options: [
      "Assigning Azure RBAC roles",
      "Ingesting telemetry from Microsoft and third-party sources",
      "Deploying endpoint antivirus",
      "Classifying confidential documents"
    ],
    answer: 1,
    explanation: "Data connectors onboard logs and alerts from services like M365, Entra ID, Azure, and third-party platforms.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-capabilities-microsoft-sentinel/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-capabilities-microsoft-sentinel/"
  },
  {
    id: 31,
    type: "exam",
    topic: "Microsoft Security Solutions",
    module: "Microsoft Sentinel",
    question: "A SOC wants automatic actions such as disabling accounts and creating incidents when analytic rules fire. Which Sentinel capability supports this?",
    options: ["Workbooks", "Playbooks", "Notebooks", "Watchlists"],
    answer: 1,
    explanation: "Sentinel playbooks (Logic Apps) provide automated and orchestrated incident response workflows.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-capabilities-microsoft-sentinel/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-capabilities-microsoft-sentinel/"
  },
  {
    id: 32,
    type: "learning",
    topic: "Microsoft Security Solutions",
    module: "Microsoft Defender XDR",
    question: "What does Microsoft Defender XDR provide?",
    options: [
      "Only endpoint anti-malware",
      "Cross-domain detection and response across endpoints, identities, email, and apps",
      "Only cloud infrastructure compliance reports",
      "Only encryption key management"
    ],
    answer: 1,
    explanation: "Defender XDR correlates signals across multiple attack surfaces for unified investigation and response.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-microsoft-defender-xdr/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-microsoft-defender-xdr/"
  },
  {
    id: 33,
    type: "learning",
    topic: "Microsoft Security Solutions",
    module: "Microsoft Defender XDR",
    question: "Which Defender product focuses on endpoint detection and response?",
    options: [
      "Microsoft Defender for Endpoint",
      "Microsoft Defender for Office 365",
      "Microsoft Defender for Identity",
      "Microsoft Defender for Cloud Apps"
    ],
    answer: 0,
    explanation: "Defender for Endpoint protects and investigates threats on Windows, macOS, Linux, and mobile endpoints.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-microsoft-defender-xdr/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-microsoft-defender-xdr/"
  },
  {
    id: 34,
    type: "exam",
    topic: "Microsoft Security Solutions",
    module: "Microsoft Defender XDR",
    question: "An attack starts with a phishing email, then suspicious endpoint behavior, then impossible-travel sign-ins. Which capability is most valuable for correlating this chain?",
    options: ["Defender XDR incident correlation", "Azure Policy", "SSPR", "Data lifecycle labels"],
    answer: 0,
    explanation: "Defender XDR correlates related alerts into incidents across email, endpoint, and identity signals.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-microsoft-defender-xdr/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-microsoft-defender-xdr/"
  },
  {
    id: 35,
    type: "learning",
    topic: "Microsoft Security Solutions",
    module: "Azure Infrastructure Security",
    question: "What is the purpose of a Web Application Firewall (WAF) in Azure?",
    options: [
      "Prevent data retention policy violations",
      "Protect web applications from common exploits like SQL injection and XSS",
      "Manage MFA registration",
      "Classify documents by sensitivity"
    ],
    answer: 1,
    explanation: "Azure WAF helps protect HTTP/S workloads from common web vulnerabilities and malicious traffic patterns.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-infrastructure-security-services-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-core-infrastructure-security-services-azure/"
  },
  {
    id: 36,
    type: "exam",
    topic: "Microsoft Security Solutions",
    module: "Azure Infrastructure Security",
    question: "Which control should be used to restrict Azure resource deployment by region and SKU across subscriptions?",
    options: ["Azure Policy", "NSG", "Sentinel analytic rule", "Purview Data Map"],
    answer: 0,
    explanation: "Azure Policy enforces governance and compliance rules, including allowed locations and SKUs.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-azure/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-azure/"
  },

  // ── Describe the capabilities of Microsoft compliance solutions (25–30%) ──
  {
    id: 37,
    type: "learning",
    topic: "Microsoft Compliance Solutions",
    module: "Service Trust & Privacy",
    question: "What can you obtain from the Microsoft Service Trust Portal?",
    options: [
      "Privileged role assignments",
      "Audit reports, compliance documentation, and trust resources",
      "Real-time endpoint alerts",
      "SQL vulnerability scans"
    ],
    answer: 1,
    explanation: "The Service Trust Portal provides Microsoft audit reports and documentation about security, privacy, and compliance practices.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-microsoft-service-trust-portal-privacy-principles/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-microsoft-service-trust-portal-privacy-principles/"
  },
  {
    id: 38,
    type: "learning",
    topic: "Microsoft Compliance Solutions",
    module: "Service Trust & Privacy",
    question: "Which privacy principle is about collecting only the data needed for a defined purpose?",
    options: ["Transparency", "Data minimization", "Accountability", "Resilience"],
    answer: 1,
    explanation: "Data minimization limits personal data collection and retention to what is necessary for legitimate purposes.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-microsoft-service-trust-portal-privacy-principles/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-microsoft-service-trust-portal-privacy-principles/"
  },
  {
    id: 39,
    type: "exam",
    topic: "Microsoft Compliance Solutions",
    module: "Purview Data Security",
    question: "Which Purview capability helps prevent users from sending sensitive information to unauthorized destinations?",
    options: ["Data Loss Prevention (DLP)", "Azure DDoS Protection", "Conditional Access", "Microsoft Sentinel"],
    answer: 0,
    explanation: "Microsoft Purview DLP detects sensitive data and applies policy actions such as block, warn, or audit.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-security-solutions-microsoft-purview/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-security-solutions-microsoft-purview/"
  },
  {
    id: 40,
    type: "learning",
    topic: "Microsoft Compliance Solutions",
    module: "Purview Data Security",
    question: "What is the purpose of sensitivity labels in Microsoft Purview?",
    options: [
      "Monitor VM CPU utilization",
      "Classify and protect data based on sensitivity",
      "Create SIEM incidents",
      "Manage Entra external identities"
    ],
    answer: 1,
    explanation: "Sensitivity labels classify content and can enforce protection actions like encryption and content markings.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-security-solutions-microsoft-purview/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-security-solutions-microsoft-purview/"
  },
  {
    id: 41,
    type: "learning",
    topic: "Microsoft Compliance Solutions",
    module: "Purview Data Security",
    question: "Insider Risk Management in Purview is mainly used to:",
    options: [
      "Patch vulnerable operating systems",
      "Identify and investigate risky insider activities",
      "Block DDoS attacks against web apps",
      "Create DNS failover policies"
    ],
    answer: 1,
    explanation: "Insider Risk Management helps detect and investigate potentially harmful user actions involving sensitive data.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-security-solutions-microsoft-purview/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-security-solutions-microsoft-purview/"
  },
  {
    id: 42,
    type: "exam",
    topic: "Microsoft Compliance Solutions",
    module: "Purview Data Compliance",
    question: "Which Purview feature preserves content for legal investigations and supports advanced search and case workflows?",
    options: ["eDiscovery", "Key Vault", "PIM", "Azure Policy"],
    answer: 0,
    explanation: "Purview eDiscovery supports legal matters with holds, search, review sets, and export workflows.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-compliance-solutions-microsoft-purview/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-compliance-solutions-microsoft-purview/"
  },
  {
    id: 43,
    type: "learning",
    topic: "Microsoft Compliance Solutions",
    module: "Purview Data Compliance",
    question: "What does the Audit solution in Microsoft Purview provide?",
    options: [
      "Automatic user provisioning",
      "Event logs for user/admin activities across Microsoft 365 services",
      "DDoS telemetry for Azure VNets",
      "Encryption key generation"
    ],
    answer: 1,
    explanation: "Purview Audit captures and searches activity events to support investigations and compliance reporting.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-compliance-solutions-microsoft-purview/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-compliance-solutions-microsoft-purview/"
  },
  {
    id: 44,
    type: "learning",
    topic: "Microsoft Compliance Solutions",
    module: "Purview Data Compliance",
    question: "What is a retention label used for?",
    options: [
      "Granting temporary admin rights",
      "Retaining or deleting content based on lifecycle rules",
      "Restricting IP addresses in firewalls",
      "Correlating endpoint alerts"
    ],
    answer: 1,
    explanation: "Retention labels apply records and lifecycle rules to keep or delete content according to policy and regulations.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-compliance-solutions-microsoft-purview/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-compliance-solutions-microsoft-purview/"
  },
  {
    id: 45,
    type: "exam",
    topic: "Microsoft Compliance Solutions",
    module: "Purview Data Governance",
    question: "Which Purview capability helps organizations discover, classify, and map data assets across data sources?",
    options: ["Data Map", "Conditional Access", "Defender for Endpoint", "Azure Bastion"],
    answer: 0,
    explanation: "Purview Data Map and related governance capabilities provide visibility into data estate metadata and classification.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-governance-solutions-microsoft-purview/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-governance-solutions-microsoft-purview/"
  },
  {
    id: 46,
    type: "learning",
    topic: "Microsoft Compliance Solutions",
    module: "Purview Data Governance",
    question: "What is the core objective of data governance?",
    options: [
      "Increase VM throughput",
      "Ensure data is trusted, discoverable, controlled, and used responsibly",
      "Reduce sign-in prompts",
      "Replace all data warehouses"
    ],
    answer: 1,
    explanation: "Data governance defines ownership, quality, classification, and policy to ensure responsible data use.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-governance-solutions-microsoft-purview/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-governance-solutions-microsoft-purview/"
  },
  {
    id: 47,
    type: "learning",
    topic: "Microsoft Compliance Solutions",
    module: "Service Trust & Privacy",
    question: "Which concept refers to controlling where data is physically stored?",
    options: ["Data residency", "Least privilege", "SOAR", "Tokenization"],
    answer: 0,
    explanation: "Data residency refers to where data is stored geographically, which can be important for regulatory requirements.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-microsoft-service-trust-portal-privacy-principles/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-microsoft-service-trust-portal-privacy-principles/"
  },
  {
    id: 48,
    type: "exam",
    topic: "Microsoft Compliance Solutions",
    module: "Purview Data Security",
    question: "A compliance team needs to automatically detect credit card numbers in Teams and prevent external sharing. Which solution should be implemented first?",
    options: ["Purview DLP policy", "Azure Firewall policy", "Entra access review", "Sentinel workbook"],
    answer: 0,
    explanation: "Purview DLP policies can detect sensitive info types and block or warn on policy violations in supported workloads like Teams and Exchange.",
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-security-solutions-microsoft-purview/",
    pageUrl: "https://learn.microsoft.com/en-us/training/modules/describe-data-security-solutions-microsoft-purview/"
  }
];
