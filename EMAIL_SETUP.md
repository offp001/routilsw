# Set up a project email address

A professional address such as `offp001@yourdomain.com` requires control of `yourdomain.com` and an email service. An address ending exactly in `@mail.com` belongs to the `mail.com` service: you cannot configure its DNS or create arbitrary addresses on that domain. To try `offp001@mail.com`, go to https://www.mail.com/ and register an account, entering the address idea and checking availability. The service only allows an address that is available; its current registration instructions also ask for a phone number. Official instructions: https://support.mail.com/account/login-details/register.html. For a branded RoUtils address use a domain you control.

## Option A: A branded mailbox (recommended)

1. Choose and register a domain you control, for example a suitable `routils`-related `.com`, `.net` or `.dev` domain. Check current price and renewal terms before buying; domain names are generally renewed yearly.
2. Choose an email host that supports custom domains. For example, review the official Zoho Mail custom-domain setup guide: https://www.zoho.com/mail/help/adminconsole/add-domains.html
3. Add the domain to the email host and verify ownership using the TXT record it provides.
4. At the domain's DNS provider, add the MX records provided by the email host. Add its SPF and DKIM records, and configure DMARC as recommended by the provider.
5. Create an address such as `offp001@yourdomain.com` or `contact@yourdomain.com`, set a strong unique password and enable multi-factor authentication if available.
6. Test receiving and sending from an external mailbox. Publish the address on the site only after setup works.

Do not copy generic MX/SPF/DKIM values from a tutorial. Use the exact current values shown by your chosen provider because they vary between services and configurations.

## Option B: Receive mail by forwarding

If you only need to receive messages at your domain and forward them to an existing inbox, Cloudflare Email Routing can route mail for a domain to an existing email address. The domain must use Cloudflare DNS. This is forwarding, not a full hosted mailbox, and by itself it does not give you a normal outbound mailbox that sends as that address.

Official setup guide: https://developers.cloudflare.com/email-service/get-started/route-emails/

## Before adding it to this website

Replace the contact destination in the site only after your address exists. Update the relevant link in `index.html`, for example:

```html
<a href="mailto:offp001@yourdomain.com">Email offp001</a>
```

For a public project, a dedicated contact alias is often safer than publishing a personal inbox. Never put mailbox passwords, API tokens, or provider credentials in the website files or GitHub repository.
