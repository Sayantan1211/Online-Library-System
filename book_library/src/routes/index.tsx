import { Switch, Route, Redirect } from "react-router";
import BooksView from "../pages/BooksView/BooksView";
import Layout from "../layout";
import BooksAdd from "../pages/BooksAdd/BooksAdd";
import BooksEdit from "../pages/BooksEdit/BooksEdit";

const routesList = [
  {
    link: "/books",
    component: BooksView,
  },
  {
    link: "/books/add",
    component: BooksAdd,
  },
  {
    link: "/books/edit/:id",
    component: BooksEdit,
  },
];

const Routes = (props: any) => {
  return (
    <Switch>
      {routesList.map(({ component: Component, link, ...rest }, index) => {
        return (
          <Route
            {...props}
            exact
            path={link}
            key={index}
            render={(props) => (
              <Layout>
                <Component {...props} {...rest} />
              </Layout>
            )}
          />
        );
      })}
      <Redirect exact from="/" to="/books" />
    </Switch>
  );
};

export default Routes;
