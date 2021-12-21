import {
  MyFooter,
  MyFooterContact,
  MyFooterContainer,
  MyFooterCopyRight,
  MyFooterLink,
  MyFooterSocial,
} from "./FooterElements";

export default function Footer() {
  return (
    <MyFooter>
      <MyFooterContainer>
        <MyFooterSocial></MyFooterSocial>
        <MyFooterContact>
          <MyFooterLink href="tel+:959768047177">
            <a>+959 768 047 177</a>
          </MyFooterLink>
          &nbsp; &nbsp; &nbsp;
          <MyFooterLink href="mailto:yan@gmail.com">
            <a>nwaung@venuslab.co</a>
          </MyFooterLink>
        </MyFooterContact>
        <MyFooterContact>
          <MyFooterLink href="/">
            <a>
              No.204, 8th Floor, Tower A, The Leaf Residence, Dama Thukha Kyaung
              Lane, Hlaing Township, Yangon.
            </a>
          </MyFooterLink>
        </MyFooterContact>
        <MyFooterCopyRight>&copy; 2019 VenusLab</MyFooterCopyRight>
      </MyFooterContainer>
    </MyFooter>
  );
}
