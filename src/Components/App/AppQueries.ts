import { gql } from "apollo-boost";

export const IS_LOGGED_IN = gql`
    {
        # apollo.ts에서 정의한 auth에게 로그인 유무를 묻는다.
        auth {
            # 지금은 resolver 파일이 없고 apollo.ts에 로컬 스토리지로 정의되어 있으므로 @client로 지정한다.
            # 그럼 클라이언트에 요청이 왔을 때 API에 보내지 않고 캐시에 보내서 로그인 유무를 알려준다.
            isLoggedIn @client
        }
    }
`;