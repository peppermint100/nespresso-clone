package io.peppermint100.server.constant;

import lombok.Getter;

@Getter
public class ExceptionMessage {
    public static final String EMPTY_VALUE_EXCEPTION_MESSAGE = "양식에 빈 값이 있습니다.";
    public static final String PASSWORD_NOT_MATCH_MESSAGE = "비밀번호가 일치하지 않습니다.";
    public static final String USER_ALREADY_EXIST_MESSAGE = "동일한 이메일을 가진 유저가 이미 존재합니다.";
    public static final String USER_NOT_EXIST_MESSAGE = "유저가 존재하지 않습니다.";
    public static final String LOG_IN_FAIL_MESSAGE = "로그인에 실패하였습니다.";
    public static final String EMAIL_NOT_MATCH_MESSAGE = "이메일이 일치하지 않습니다.";
    public static final String GET_ALL_CAPSULES_FAIL_MESSAGE = "캡슐 정보를 불러오지 못했습니다.";
    public static final String GET_ALL_MACHINES_FAIL_MESSAGE = "머신 정보를 불러오지 못했습니다.";
    public static final String GET_ITEM_BY_ITEM_ID_FAIL_MESSAGE = "제품 정보를 불러오지 못했습니다.";
    public static final String ITEM_NOT_EXIST_MESSAGE = "존재하지 않는 제품입니다.";
    public static final String UNEXCEPTABLE_VALUE_EXCEPTION_MESSAGE = "유효하지 않은 값입니다.";
}
