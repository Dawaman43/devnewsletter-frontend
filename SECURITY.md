# Security & DNS recommendations

## SPF (Sender Policy Framework)

To prevent email spoofing from this domain, add an SPF TXT record to your DNS. Example minimal SPF record allowing common mailing services and your sending host:

```
v=spf1 include:_spf.google.com include:sendgrid.net ip4:203.0.113.10 -all
```

- Replace the `include:` entries with services you use (e.g., SendGrid, Mailgun, Google Workspace).
- Replace `ip4:203.0.113.10` with your sending server IPs.

If you manage DNS through your registrar or hosting provider, add a TXT record with the SPF value above. Contact your email provider for exact recommended entries.
