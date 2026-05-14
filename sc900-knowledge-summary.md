# SC-900 Knowledge Summary

This repository now uses SC-900-focused quiz and flash card content aligned to Microsoft Learn resources.

## Primary Sources (Microsoft Learn)

- SC-900 Study Guide (skills measured):  
  https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-900
- Learning path: Describe concepts of security, compliance, and identity  
  https://learn.microsoft.com/en-us/training/paths/describe-concepts-of-security-compliance-identity/
- Learning path: Introduction to Microsoft Entra  
  https://learn.microsoft.com/en-us/training/paths/describe-capabilities-of-microsoft-identity-access/
- Learning path: Introduction to Microsoft security solutions  
  https://learn.microsoft.com/en-us/training/paths/describe-capabilities-of-microsoft-security-solutions/
- Learning path: Introduction to Microsoft Purview and privacy principles  
  https://learn.microsoft.com/en-us/training/paths/describe-capabilities-of-microsoft-compliance-solutions/

## Skills-Measured Domain Model Used in This App

- Describe the concepts of security, compliance, and identity (10–15%)
- Describe the capabilities of Microsoft Entra (25–30%)
- Describe the capabilities of Microsoft security solutions (30–35%)
- Describe the capabilities of Microsoft compliance solutions (25–30%)

## Module Model Used in This App

### Security, Compliance, and Identity Concepts
- Security & Compliance Concepts
- Identity Concepts

### Microsoft Entra Capabilities
- Entra ID Fundamentals
- Entra Authentication
- Entra Access Management
- Entra Identity Protection & Governance

### Microsoft Security Solutions
- Security Copilot
- Azure Infrastructure Security
- Azure Security Management
- Microsoft Sentinel
- Microsoft Defender XDR

### Microsoft Compliance Solutions
- Service Trust & Privacy
- Purview Data Security
- Purview Data Compliance
- Purview Data Governance

## Notes

- Quiz mode and flash card mode use the same `QUESTIONS` bank and schema.
- Every question keeps direct Microsoft Learn module links (`learnUrl` / `pageUrl`).
- The app remains offline-capable at runtime, but source research is Microsoft Learn-first.
