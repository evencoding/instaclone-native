import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { offsetLimitPagination } from "@apollo/client/utilities";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

const TOKEN = "token";

export const logUserIn = async (token) => {
  // await AsyncStorage.setItem("token", JSON.stringify(token));
  await AsyncStorage.multiSet([
    [TOKEN, token],
    ["loggedIn", "yes"],
  ]);
  isLoggedInVar(true);
  tokenVar(token);
};
export const logUserOut = async () => {
  await AsyncStorage.multiRemove([TOKEN, "loggedIn"]);
  isLoggedInVar(false);
  tokenVar("");
};

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: tokenVar(),
    },
  };
  // return {
  //   headers: { ...headers, authorization: TOKEN ? `Bearer ${TOKEN}` : "" },
  // };
});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        seeFeed: offsetLimitPagination(),
        // offsetLimitPagination 의 동작원리
        // {
        //   keyArgs: false,
        //   merge(existing = [], incoming = []) {
        //     return [...existing, ...incoming];
        //   },
        // },
      },
    },
  },
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default client;
