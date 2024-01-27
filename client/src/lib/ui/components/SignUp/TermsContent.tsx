import { Typography, Divider } from "@mui/material";

export default function TermsContent() {
  return (
    <>
      <Typography sx={{ fontSize: "200%", textDecoration: "underline" }}>
        Terms of Service
      </Typography>
      <Divider sx={{ my: 3 }} />
      <Typography variant="h6" sx={{ fontSize: "120%" }}>
        Acceptance of Terms
      </Typography>
      <Typography variant="body1">
        By accessing our website or application (hereinafter, the "Service"),
        you are agreeing to be bound by these Terms of Service. If you do not
        agree to these terms, please do not use our Service.
      </Typography>

      <Typography variant="h6" sx={{ fontSize: "120%" }}>
        Use of the Service
      </Typography>
      <Typography variant="body1">
        You agree to use the Service only for purposes that are permitted by
        these terms and any applicable law, regulations or generally accepted
        practices in the relevant jurisdictions.
      </Typography>

      <Typography variant="h6" sx={{ fontSize: "120%" }}>
        Privacy Policy
      </Typography>
      <Typography variant="body1">
        Our Privacy Policy explains how we handle your personal data and protect
        your privacy when using our Service.
      </Typography>

      <Typography variant="h6" sx={{ fontSize: "120%" }}>
        Content
      </Typography>
      <Typography variant="body1">
        All content provided on this website is for informational purposes only.
        We make no representations as to the accuracy or completeness of any
        information on this site or found by following any link on this site.
      </Typography>

      <Typography variant="h6" sx={{ fontSize: "120%" }}>
        Changes to the Service
      </Typography>
      <Typography variant="body1">
        We reserve the right to modify or discontinue, temporarily or
        permanently, the Service (or any part thereof) with or without notice.
      </Typography>

      <Typography variant="h6" sx={{ fontSize: "120%" }}>
        Termination
      </Typography>
      <Typography variant="body1">
        We may terminate or suspend access to our Service immediately, without
        prior notice or liability, for any reason whatsoever, including without
        limitation if you breach the Terms.
      </Typography>

      <Typography variant="h6" sx={{ fontSize: "120%" }}>
        Governing Law
      </Typography>
      <Typography variant="body1">
        These Terms shall be governed by and construed in accordance with the
        laws of [Your jurisdiction].
      </Typography>

      <Typography variant="body1">
        By continuing to access or use our Service after changes become
        effective, you agree to be bound by the revised terms. If you do not
        agree to the new terms, please stop using the Service.
      </Typography>
    </>
  );
}
