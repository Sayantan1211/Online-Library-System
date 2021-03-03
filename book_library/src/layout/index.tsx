import Header from "../components/Header/Header";
import "./layout.styles.scss";

interface Props {
  children: any;
}

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <div className="main">
      <Header />
      <main className="content">{children}</main>
    </div>
  );
}
