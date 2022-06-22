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
import com.ziqni.gateway.client.model.Competition;
import com.ziqni.gateway.client.model.Contest;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * CompetitionById
 */
@JsonPropertyOrder({
  CompetitionById.JSON_PROPERTY_CONTESTS,
  CompetitionById.JSON_PROPERTY_STATUS_CODE,
  CompetitionById.JSON_PROPERTY_NUMBER_OF_ROUNDS,
  CompetitionById.JSON_PROPERTY_ACTUAL_START,
  CompetitionById.JSON_PROPERTY_ACTUAL_END,
  CompetitionById.JSON_PROPERTY_DESCRIPTION,
  CompetitionById.JSON_PROPERTY_OPTIN_REQUIRED,
  CompetitionById.JSON_PROPERTY_LABEL,
  CompetitionById.JSON_PROPERTY_SCHEDULED_START,
  CompetitionById.JSON_PROPERTY_SCHEDULED_END,
  CompetitionById.JSON_PROPERTY_ID,
  CompetitionById.JSON_PROPERTY_TERMS_CONDITIONS,
  CompetitionById.JSON_PROPERTY_STATUS
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class CompetitionById {
  public static final String JSON_PROPERTY_CONTESTS = "contests";
  private List<Contest> contests = null;

  public static final String JSON_PROPERTY_STATUS_CODE = "statusCode";
  private Integer statusCode;

  public static final String JSON_PROPERTY_NUMBER_OF_ROUNDS = "numberOfRounds";
  private Integer numberOfRounds;

  public static final String JSON_PROPERTY_ACTUAL_START = "actualStart";
  private OffsetDateTime actualStart;

  public static final String JSON_PROPERTY_ACTUAL_END = "actualEnd";
  private OffsetDateTime actualEnd;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  private String description;

  public static final String JSON_PROPERTY_OPTIN_REQUIRED = "optinRequired";
  private Boolean optinRequired;

  public static final String JSON_PROPERTY_LABEL = "label";
  private String label;

  public static final String JSON_PROPERTY_SCHEDULED_START = "scheduledStart";
  private OffsetDateTime scheduledStart;

  public static final String JSON_PROPERTY_SCHEDULED_END = "scheduledEnd";
  private OffsetDateTime scheduledEnd;

  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  public static final String JSON_PROPERTY_TERMS_CONDITIONS = "termsConditions";
  private String termsConditions;

  public static final String JSON_PROPERTY_STATUS = "status";
  private String status;


  public CompetitionById contests(List<Contest> contests) {
    this.contests = contests;
    return this;
  }

  public CompetitionById addContestsItem(Contest contestsItem) {
    if (this.contests == null) {
      this.contests = new ArrayList<>();
    }
    this.contests.add(contestsItem);
    return this;
  }

   /**
   * Get contests
   * @return contests
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CONTESTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<Contest> getContests() {
    return contests;
  }


  @JsonProperty(JSON_PROPERTY_CONTESTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContests(List<Contest> contests) {
    this.contests = contests;
  }


  public CompetitionById statusCode(Integer statusCode) {
    this.statusCode = statusCode;
    return this;
  }

   /**
   * Get statusCode
   * @return statusCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_STATUS_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getStatusCode() {
    return statusCode;
  }


  @JsonProperty(JSON_PROPERTY_STATUS_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatusCode(Integer statusCode) {
    this.statusCode = statusCode;
  }


  public CompetitionById numberOfRounds(Integer numberOfRounds) {
    this.numberOfRounds = numberOfRounds;
    return this;
  }

   /**
   * Get numberOfRounds
   * @return numberOfRounds
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_NUMBER_OF_ROUNDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getNumberOfRounds() {
    return numberOfRounds;
  }


  @JsonProperty(JSON_PROPERTY_NUMBER_OF_ROUNDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNumberOfRounds(Integer numberOfRounds) {
    this.numberOfRounds = numberOfRounds;
  }


  public CompetitionById actualStart(OffsetDateTime actualStart) {
    this.actualStart = actualStart;
    return this;
  }

   /**
   * Get actualStart
   * @return actualStart
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ACTUAL_START)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OffsetDateTime getActualStart() {
    return actualStart;
  }


  @JsonProperty(JSON_PROPERTY_ACTUAL_START)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActualStart(OffsetDateTime actualStart) {
    this.actualStart = actualStart;
  }


  public CompetitionById actualEnd(OffsetDateTime actualEnd) {
    this.actualEnd = actualEnd;
    return this;
  }

   /**
   * Get actualEnd
   * @return actualEnd
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ACTUAL_END)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OffsetDateTime getActualEnd() {
    return actualEnd;
  }


  @JsonProperty(JSON_PROPERTY_ACTUAL_END)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActualEnd(OffsetDateTime actualEnd) {
    this.actualEnd = actualEnd;
  }


  public CompetitionById description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDescription(String description) {
    this.description = description;
  }


  public CompetitionById optinRequired(Boolean optinRequired) {
    this.optinRequired = optinRequired;
    return this;
  }

   /**
   * Get optinRequired
   * @return optinRequired
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_OPTIN_REQUIRED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getOptinRequired() {
    return optinRequired;
  }


  @JsonProperty(JSON_PROPERTY_OPTIN_REQUIRED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOptinRequired(Boolean optinRequired) {
    this.optinRequired = optinRequired;
  }


  public CompetitionById label(String label) {
    this.label = label;
    return this;
  }

   /**
   * Get label
   * @return label
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getLabel() {
    return label;
  }


  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLabel(String label) {
    this.label = label;
  }


  public CompetitionById scheduledStart(OffsetDateTime scheduledStart) {
    this.scheduledStart = scheduledStart;
    return this;
  }

   /**
   * Get scheduledStart
   * @return scheduledStart
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SCHEDULED_START)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OffsetDateTime getScheduledStart() {
    return scheduledStart;
  }


  @JsonProperty(JSON_PROPERTY_SCHEDULED_START)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setScheduledStart(OffsetDateTime scheduledStart) {
    this.scheduledStart = scheduledStart;
  }


  public CompetitionById scheduledEnd(OffsetDateTime scheduledEnd) {
    this.scheduledEnd = scheduledEnd;
    return this;
  }

   /**
   * Get scheduledEnd
   * @return scheduledEnd
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SCHEDULED_END)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OffsetDateTime getScheduledEnd() {
    return scheduledEnd;
  }


  @JsonProperty(JSON_PROPERTY_SCHEDULED_END)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setScheduledEnd(OffsetDateTime scheduledEnd) {
    this.scheduledEnd = scheduledEnd;
  }


  public CompetitionById id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(String id) {
    this.id = id;
  }


  public CompetitionById termsConditions(String termsConditions) {
    this.termsConditions = termsConditions;
    return this;
  }

   /**
   * Get termsConditions
   * @return termsConditions
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_TERMS_CONDITIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getTermsConditions() {
    return termsConditions;
  }


  @JsonProperty(JSON_PROPERTY_TERMS_CONDITIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTermsConditions(String termsConditions) {
    this.termsConditions = termsConditions;
  }


  public CompetitionById status(String status) {
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getStatus() {
    return status;
  }


  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatus(String status) {
    this.status = status;
  }


  /**
   * Return true if this CompetitionById object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CompetitionById competitionById = (CompetitionById) o;
    return Objects.equals(this.contests, competitionById.contests) &&
        Objects.equals(this.statusCode, competitionById.statusCode) &&
        Objects.equals(this.numberOfRounds, competitionById.numberOfRounds) &&
        Objects.equals(this.actualStart, competitionById.actualStart) &&
        Objects.equals(this.actualEnd, competitionById.actualEnd) &&
        Objects.equals(this.description, competitionById.description) &&
        Objects.equals(this.optinRequired, competitionById.optinRequired) &&
        Objects.equals(this.label, competitionById.label) &&
        Objects.equals(this.scheduledStart, competitionById.scheduledStart) &&
        Objects.equals(this.scheduledEnd, competitionById.scheduledEnd) &&
        Objects.equals(this.id, competitionById.id) &&
        Objects.equals(this.termsConditions, competitionById.termsConditions) &&
        Objects.equals(this.status, competitionById.status);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contests, statusCode, numberOfRounds, actualStart, actualEnd, description, optinRequired, label, scheduledStart, scheduledEnd, id, termsConditions, status);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CompetitionById {\n");
    sb.append("    contests: ").append(toIndentedString(contests)).append("\n");
    sb.append("    statusCode: ").append(toIndentedString(statusCode)).append("\n");
    sb.append("    numberOfRounds: ").append(toIndentedString(numberOfRounds)).append("\n");
    sb.append("    actualStart: ").append(toIndentedString(actualStart)).append("\n");
    sb.append("    actualEnd: ").append(toIndentedString(actualEnd)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    optinRequired: ").append(toIndentedString(optinRequired)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
    sb.append("    scheduledStart: ").append(toIndentedString(scheduledStart)).append("\n");
    sb.append("    scheduledEnd: ").append(toIndentedString(scheduledEnd)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    termsConditions: ").append(toIndentedString(termsConditions)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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

