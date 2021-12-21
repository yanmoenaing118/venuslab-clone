import { useDispatch } from "react-redux";
import { MyMobileMenu, MyMobileMenuBar } from "./MobileMenuElements";
import { toggle } from "../../store";
export default function MobileMenu() {
  const dispatch = useDispatch();
  return (
    <MyMobileMenu onClick={() => dispatch(toggle())}>
      <MyMobileMenuBar></MyMobileMenuBar>
      <MyMobileMenuBar mid></MyMobileMenuBar>
      <MyMobileMenuBar></MyMobileMenuBar>
    </MyMobileMenu>
  );
}
