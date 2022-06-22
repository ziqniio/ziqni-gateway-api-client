/*
* Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
*/
/*
 * Ziqni Gateway Services
 * These are the Gateway services to be used by customers.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package com.ziqni.gateway.client;

import com.ziqni.gateway.client.configuration.ApiRestClientFactory;
import com.ziqni.gateway.client.configuration.GatewayApiClientConfig;
import com.ziqni.gateway.client.api.*;
import com.ziqni.gateway.client.ws.WsAddress;
import java.time.Duration;

public abstract class ApiClientFactory {

    private static StreamingClient streamingClient;
    private static Boolean initialised = false;
    private static AchievementsApi achievementsApi;
    private static CompetitionsApi competitionsApi;
    private static ContestsApi contestsApi;
    private static MemberAchievementsApi memberAchievementsApi;
    private static MemberAwardsApi memberAwardsApi;
    private static MemberCompetitionsApi memberCompetitionsApi;
    private static MemberMessagesApi memberMessagesApi;
    private static MembersApi membersApi;
    private static SseApi sseApi;
    private static WidgetsApi widgetsApi;
    

    public static void initialise() throws Exception {
        if(initialised) return;

        ApiClientFactory.initialised = true;

        if(GatewayApiClientConfig.isWebsocket())
            streamingClient = new StreamingClient(new WsAddress().getAddress());
    }

    private static void init() {
        try {
            initialise();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static Boolean getInitialised() {
        return initialised;
    }

     public static AchievementsApi getAchievementsApi() {
        if(ApiClientFactory.achievementsApi == null) {
            init();

            ApiClientFactory.achievementsApi = (GatewayApiClientConfig.isWebsocket())
                    ? new AchievementsApiWs(ApiRestClientFactory.getApiClient(), streamingClient, Duration.ofSeconds(5))
                    : new AchievementsApi(ApiRestClientFactory.getApiClient());
        }

        return ApiClientFactory.achievementsApi;
    }

     public static CompetitionsApi getCompetitionsApi() {
        if(ApiClientFactory.competitionsApi == null) {
            init();

            ApiClientFactory.competitionsApi = (GatewayApiClientConfig.isWebsocket())
                    ? new CompetitionsApiWs(ApiRestClientFactory.getApiClient(), streamingClient, Duration.ofSeconds(5))
                    : new CompetitionsApi(ApiRestClientFactory.getApiClient());
        }

        return ApiClientFactory.competitionsApi;
    }

     public static ContestsApi getContestsApi() {
        if(ApiClientFactory.contestsApi == null) {
            init();

            ApiClientFactory.contestsApi = (GatewayApiClientConfig.isWebsocket())
                    ? new ContestsApiWs(ApiRestClientFactory.getApiClient(), streamingClient, Duration.ofSeconds(5))
                    : new ContestsApi(ApiRestClientFactory.getApiClient());
        }

        return ApiClientFactory.contestsApi;
    }

     public static MemberAchievementsApi getMemberAchievementsApi() {
        if(ApiClientFactory.memberAchievementsApi == null) {
            init();

            ApiClientFactory.memberAchievementsApi = (GatewayApiClientConfig.isWebsocket())
                    ? new MemberAchievementsApiWs(ApiRestClientFactory.getApiClient(), streamingClient, Duration.ofSeconds(5))
                    : new MemberAchievementsApi(ApiRestClientFactory.getApiClient());
        }

        return ApiClientFactory.memberAchievementsApi;
    }

     public static MemberAwardsApi getMemberAwardsApi() {
        if(ApiClientFactory.memberAwardsApi == null) {
            init();

            ApiClientFactory.memberAwardsApi = (GatewayApiClientConfig.isWebsocket())
                    ? new MemberAwardsApiWs(ApiRestClientFactory.getApiClient(), streamingClient, Duration.ofSeconds(5))
                    : new MemberAwardsApi(ApiRestClientFactory.getApiClient());
        }

        return ApiClientFactory.memberAwardsApi;
    }

     public static MemberCompetitionsApi getMemberCompetitionsApi() {
        if(ApiClientFactory.memberCompetitionsApi == null) {
            init();

            ApiClientFactory.memberCompetitionsApi = (GatewayApiClientConfig.isWebsocket())
                    ? new MemberCompetitionsApiWs(ApiRestClientFactory.getApiClient(), streamingClient, Duration.ofSeconds(5))
                    : new MemberCompetitionsApi(ApiRestClientFactory.getApiClient());
        }

        return ApiClientFactory.memberCompetitionsApi;
    }

     public static MemberMessagesApi getMemberMessagesApi() {
        if(ApiClientFactory.memberMessagesApi == null) {
            init();

            ApiClientFactory.memberMessagesApi = (GatewayApiClientConfig.isWebsocket())
                    ? new MemberMessagesApiWs(ApiRestClientFactory.getApiClient(), streamingClient, Duration.ofSeconds(5))
                    : new MemberMessagesApi(ApiRestClientFactory.getApiClient());
        }

        return ApiClientFactory.memberMessagesApi;
    }

     public static MembersApi getMembersApi() {
        if(ApiClientFactory.membersApi == null) {
            init();

            ApiClientFactory.membersApi = (GatewayApiClientConfig.isWebsocket())
                    ? new MembersApiWs(ApiRestClientFactory.getApiClient(), streamingClient, Duration.ofSeconds(5))
                    : new MembersApi(ApiRestClientFactory.getApiClient());
        }

        return ApiClientFactory.membersApi;
    }

     public static SseApi getSseApi() {
        if(ApiClientFactory.sseApi == null) {
            init();

            ApiClientFactory.sseApi = (GatewayApiClientConfig.isWebsocket())
                    ? new SseApiWs(ApiRestClientFactory.getApiClient(), streamingClient, Duration.ofSeconds(5))
                    : new SseApi(ApiRestClientFactory.getApiClient());
        }

        return ApiClientFactory.sseApi;
    }

     public static WidgetsApi getWidgetsApi() {
        if(ApiClientFactory.widgetsApi == null) {
            init();

            ApiClientFactory.widgetsApi = (GatewayApiClientConfig.isWebsocket())
                    ? new WidgetsApiWs(ApiRestClientFactory.getApiClient(), streamingClient, Duration.ofSeconds(5))
                    : new WidgetsApi(ApiRestClientFactory.getApiClient());
        }

        return ApiClientFactory.widgetsApi;
    }

    
}
