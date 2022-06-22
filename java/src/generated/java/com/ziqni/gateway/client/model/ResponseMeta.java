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


package com.ziqni.gateway.client.model;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * Response metadata   
 */
@ApiModel(description = "Response metadata   ")
@JsonPropertyOrder({
  ResponseMeta.JSON_PROPERTY_TOTAL_RECORDS_FOUND,
  ResponseMeta.JSON_PROPERTY_SKIP,
  ResponseMeta.JSON_PROPERTY_LIMIT,
  ResponseMeta.JSON_PROPERTY_TIME
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ResponseMeta {
  public static final String JSON_PROPERTY_TOTAL_RECORDS_FOUND = "totalRecordsFound";
  private Integer totalRecordsFound;

  public static final String JSON_PROPERTY_SKIP = "skip";
  private Integer skip;

  public static final String JSON_PROPERTY_LIMIT = "limit";
  private Integer limit;

  public static final String JSON_PROPERTY_TIME = "time";
  private OffsetDateTime time;


  public ResponseMeta totalRecordsFound(Integer totalRecordsFound) {
    this.totalRecordsFound = totalRecordsFound;
    return this;
  }

   /**
   * Get totalRecordsFound
   * @return totalRecordsFound
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_TOTAL_RECORDS_FOUND)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Integer getTotalRecordsFound() {
    return totalRecordsFound;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL_RECORDS_FOUND)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTotalRecordsFound(Integer totalRecordsFound) {
    this.totalRecordsFound = totalRecordsFound;
  }


  public ResponseMeta skip(Integer skip) {
    this.skip = skip;
    return this;
  }

   /**
   * Get skip
   * @return skip
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_SKIP)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Integer getSkip() {
    return skip;
  }


  @JsonProperty(JSON_PROPERTY_SKIP)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setSkip(Integer skip) {
    this.skip = skip;
  }


  public ResponseMeta limit(Integer limit) {
    this.limit = limit;
    return this;
  }

   /**
   * Get limit
   * @return limit
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_LIMIT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Integer getLimit() {
    return limit;
  }


  @JsonProperty(JSON_PROPERTY_LIMIT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setLimit(Integer limit) {
    this.limit = limit;
  }


  public ResponseMeta time(OffsetDateTime time) {
    this.time = time;
    return this;
  }

   /**
   * Get time
   * @return time
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OffsetDateTime getTime() {
    return time;
  }


  @JsonProperty(JSON_PROPERTY_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTime(OffsetDateTime time) {
    this.time = time;
  }


  /**
   * Return true if this ResponseMeta object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ResponseMeta responseMeta = (ResponseMeta) o;
    return Objects.equals(this.totalRecordsFound, responseMeta.totalRecordsFound) &&
        Objects.equals(this.skip, responseMeta.skip) &&
        Objects.equals(this.limit, responseMeta.limit) &&
        Objects.equals(this.time, responseMeta.time);
  }

  @Override
  public int hashCode() {
    return Objects.hash(totalRecordsFound, skip, limit, time);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ResponseMeta {\n");
    sb.append("    totalRecordsFound: ").append(toIndentedString(totalRecordsFound)).append("\n");
    sb.append("    skip: ").append(toIndentedString(skip)).append("\n");
    sb.append("    limit: ").append(toIndentedString(limit)).append("\n");
    sb.append("    time: ").append(toIndentedString(time)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

