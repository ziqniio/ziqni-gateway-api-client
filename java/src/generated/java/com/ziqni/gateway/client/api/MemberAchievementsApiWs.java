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

package com.ziqni.gateway.client.api;

import com.ziqni.gateway.client.StreamingClient;
import com.ziqni.gateway.client.ApiClient;
import com.ziqni.gateway.client.ApiException;
import com.ziqni.gateway.client.ApiResponse;
import com.ziqni.gateway.client.Pair;
import com.ziqni.gateway.client.ws.WsCompletableFuture;
import com.ziqni.gateway.client.model.AchievementIssuedResponse;
import com.ziqni.gateway.client.model.ApiErrorResponse;
import com.ziqni.gateway.client.model.Error;
import com.ziqni.gateway.client.model.MemberAchievementResponse;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.time.Duration;
import java.util.*;

import java.util.concurrent.CompletableFuture;

@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
    public class MemberAchievementsApiWs extends MemberAchievementsApi {
    private final ApiClient apiClient;
    private final ObjectMapper memberVarObjectMapper;
    private final Duration memberVarReadTimeout;
    private final StreamingClient streamingClient;

    public MemberAchievementsApiWs(ApiClient apiClient, StreamingClient streamingClient, Duration readTimeout) {
        this.apiClient = apiClient;
        this.memberVarObjectMapper = apiClient.getObjectMapper();
        this.streamingClient = streamingClient;
        this.memberVarReadTimeout = null;
    }

        /**
        * Returns specific achievement for a member
        * Returns a progression list of achieved percentages based on the configured achievements rules for a specified member.  
            * @param X_API_KEY Your unique API key (required)
            * @param spaceName This is the space name which is linked to the account (required)
            * @param memberId Id of a Member (required)
            * @param achievementId Id of an achievement (required)
            * @return CompletableFuture&lt;MemberAchievementResponse&gt;
        * @throws ApiException if fails to make API call
        */
        public CompletableFuture<MemberAchievementResponse> getAchievementByIdAndMemberId(String X_API_KEY, String spaceName, String memberId, String achievementId) {
        var request = new HashMap<String, Object>();
        
                

        var pathParam = new HashMap<String, Object>();
        pathParam.put("spaceName", spaceName);
pathParam.put("memberId", memberId);
pathParam.put("achievementId", achievementId);
        request.put("path",pathParam);
        

        CompletableFuture<MemberAchievementResponse> result = new WsCompletableFuture(this.streamingClient, "/aapi/getAchievementByIdAndMemberId", request);
        return result;
        }
        /**
        * Returns specific achievement for a member
        * Returns a progression list of achieved percentages based on the configured achievements rules for a specified member.  
            * @param X_API_KEY Your unique API key (required)
            * @param spaceName This is the space name which is linked to the account (required)
            * @param memberRefId Reference Id of a Member (required)
            * @param achievementId Id of an achievement (required)
            * @return CompletableFuture&lt;MemberAchievementResponse&gt;
        * @throws ApiException if fails to make API call
        */
        public CompletableFuture<MemberAchievementResponse> getAchievementByIdAndMemberRefId(String X_API_KEY, String spaceName, String memberRefId, String achievementId) {
        var request = new HashMap<String, Object>();
        
                

        var pathParam = new HashMap<String, Object>();
        pathParam.put("spaceName", spaceName);
pathParam.put("memberRefId", memberRefId);
pathParam.put("achievementId", achievementId);
        request.put("path",pathParam);
        

        CompletableFuture<MemberAchievementResponse> result = new WsCompletableFuture(this.streamingClient, "/aapi/getAchievementByIdAndMemberRefId", request);
        return result;
        }
        /**
        * Returns achievements for a member
        * Returns a progression list of achieved percentages based on the configured achievements rules for a specified member.
            * @param X_API_KEY Your unique API key (required)
            * @param spaceName This is the space name which is linked to the account (required)
            * @param memberId Id of a Member (required)
            * @param id The unique identifiers of the resources (optional
            * @return CompletableFuture&lt;MemberAchievementResponse&gt;
        * @throws ApiException if fails to make API call
        */
        public CompletableFuture<MemberAchievementResponse> getAchievementsByMemberId(String X_API_KEY, String spaceName, String memberId, List<String> id) {
        var request = new HashMap<String, Object>();
        var queryParam = new HashMap<String, Object>();
        queryParam.put("id", id);
        request.put("query",queryParam);

        var pathParam = new HashMap<String, Object>();
        pathParam.put("spaceName", spaceName);
pathParam.put("memberId", memberId);
        request.put("path",pathParam);
        

        CompletableFuture<MemberAchievementResponse> result = new WsCompletableFuture(this.streamingClient, "/aapi/getAchievementsByMemberId", request);
        return result;
        }
        /**
        * Returns achievements for a member
        * Returns a progression list of achieved percentages based on the configured achievements rules for a specified member.
            * @param X_API_KEY Your unique API key (required)
            * @param spaceName This is the space name which is linked to the account (required)
            * @param memberRefId Reference Id of a Member (required)
            * @param id The unique identifiers of the resources (optional
            * @return CompletableFuture&lt;MemberAchievementResponse&gt;
        * @throws ApiException if fails to make API call
        */
        public CompletableFuture<MemberAchievementResponse> getAchievementsByMemberRefId(String X_API_KEY, String spaceName, String memberRefId, List<String> id) {
        var request = new HashMap<String, Object>();
        var queryParam = new HashMap<String, Object>();
        queryParam.put("id", id);
        request.put("query",queryParam);

        var pathParam = new HashMap<String, Object>();
        pathParam.put("spaceName", spaceName);
pathParam.put("memberRefId", memberRefId);
        request.put("path",pathParam);
        

        CompletableFuture<MemberAchievementResponse> result = new WsCompletableFuture(this.streamingClient, "/aapi/getAchievementsByMemberRefId", request);
        return result;
        }
        /**
        * Returns achievements issued for a member
        * Returns an aggregated list of achieved achievement IDs for a specified member with a count that indicates the amount of times this achievement was issued for the specified memerId.  If there is no achievement data inside the events stream for a specified user no data returned and the value of the \&quot;totalRecordsFound\&quot; variable in metadata is 0.  &#x60;All the achievements, including deprecated/archived ones, that were issued to the member are displayed.&#x60;
            * @param X_API_KEY Your unique API key (required)
            * @param spaceName This is the space name which is linked to the account (required)
            * @param memberId Id of a Member (required)
            * @return CompletableFuture&lt;AchievementIssuedResponse&gt;
        * @throws ApiException if fails to make API call
        */
        public CompletableFuture<AchievementIssuedResponse> getIssuedAchievementsByMemberId(String X_API_KEY, String spaceName, String memberId) {
        var request = new HashMap<String, Object>();
        
                

        var pathParam = new HashMap<String, Object>();
        pathParam.put("spaceName", spaceName);
pathParam.put("memberId", memberId);
        request.put("path",pathParam);
        

        CompletableFuture<AchievementIssuedResponse> result = new WsCompletableFuture(this.streamingClient, "/aapi/getIssuedAchievementsByMemberId", request);
        return result;
        }
        /**
        * Returns achievements issued for a member
        * Returns an aggregated list of achieved achievement IDs for a specified member with a count that indicates the amount of times this achievement was issued for the specified memerId.  If there is no achievement data inside the events stream for a specified user no data returned and the value of the \&quot;totalRecordsFound\&quot; variable in metadata is 0.  &#x60;All the achievements, including deprecated/archived ones, that were issued to the member are displayed.&#x60;
            * @param X_API_KEY Your unique API key (required)
            * @param spaceName This is the space name which is linked to the account (required)
            * @param memberRefId Reference Id of a Member (required)
            * @return CompletableFuture&lt;AchievementIssuedResponse&gt;
        * @throws ApiException if fails to make API call
        */
        public CompletableFuture<AchievementIssuedResponse> getIssuedAchievementsByMemberRefId(String X_API_KEY, String spaceName, String memberRefId) {
        var request = new HashMap<String, Object>();
        
                

        var pathParam = new HashMap<String, Object>();
        pathParam.put("spaceName", spaceName);
pathParam.put("memberRefId", memberRefId);
        request.put("path",pathParam);
        

        CompletableFuture<AchievementIssuedResponse> result = new WsCompletableFuture(this.streamingClient, "/aapi/getIssuedAchievementsByMemberRefId", request);
        return result;
        }
        }
