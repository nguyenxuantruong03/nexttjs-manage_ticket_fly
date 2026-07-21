"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { AirportTransferFormValues } from "../schema/core/schema";

export default function ServiceStep() {
  return (
    <>
      {/* Flight Support */}
      <FormSection
        title="Flight Support"
        description="Flight tracking and passenger flight information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<AirportTransferFormValues>
            name="flightSupport.flightNumberRequired"
            label="Flight Number Required"
          />

          <FormSwitch<AirportTransferFormValues>
            name="flightSupport.airlineRequired"
            label="Airline Required"
          />

          <FormSwitch<AirportTransferFormValues>
            name="flightSupport.terminalSupported"
            label="Terminal Supported"
          />

          <FormSwitch<AirportTransferFormValues>
            name="flightSupport.arrivalFlightOnly"
            label="Arrival Flight Only"
          />

          <FormSwitch<AirportTransferFormValues>
            name="flightSupport.departureFlightOnly"
            label="Departure Flight Only"
          />

          <FormSwitch<AirportTransferFormValues>
            name="flightSupport.flightTracking"
            label="Flight Tracking"
          />

          <FormSwitch<AirportTransferFormValues>
            name="flightSupport.delayMonitoring"
            label="Delay Monitoring"
          />
        </div>
      </FormSection>

      {/* Meet And Greet */}
      <FormSection title="Meet And Greet" description="Airport welcome service">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<AirportTransferFormValues>
            name="meetAndGreet.available"
            label="Available"
          />

          <FormSwitch<AirportTransferFormValues>
            name="meetAndGreet.included"
            label="Included"
          />

          <FormInput<AirportTransferFormValues>
            name="meetAndGreet.additionalFee"
            label="Additional Fee"
            type="number"
            placeholder="Enter additional fee"
          />

          <FormSwitch<AirportTransferFormValues>
            name="meetAndGreet.nameBoard"
            label="Name Board"
          />

          <FormSwitch<AirportTransferFormValues>
            name="meetAndGreet.airportRepresentative"
            label="Airport Representative"
          />

          <FormSwitch<AirportTransferFormValues>
            name="meetAndGreet.multilingualSupport"
            label="Multilingual Support"
          />
        </div>
      </FormSection>

      {/* Waiting Policy */}
      <FormSection title="Waiting Policy" description="Driver waiting rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="waitingPolicy.freeWaitingMinutes"
            label="Free Waiting Minutes"
            type="number"
            placeholder="Enter free waiting minutes"
          />

          <FormInput<AirportTransferFormValues>
            name="waitingPolicy.airportFreeWaitingMinutes"
            label="Airport Free Waiting Minutes"
            type="number"
            placeholder="Enter airport waiting minutes"
          />

          <FormInput<AirportTransferFormValues>
            name="waitingPolicy.waitingFeePerHour"
            label="Waiting Fee Per Hour"
            type="number"
            placeholder="Enter waiting fee per hour"
          />

          <FormInput<AirportTransferFormValues>
            name="waitingPolicy.maximumWaitingMinutes"
            label="Maximum Waiting Minutes"
            type="number"
            placeholder="Enter maximum waiting minutes"
          />
        </div>
      </FormSection>

      {/* Luggage Policy */}
      <FormSection title="Luggage Policy" description="Passenger luggage rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="luggagePolicy.checkedBaggage"
            label="Checked Baggage"
            type="number"
            placeholder="Enter checked baggage quantity"
          />

          <FormInput<AirportTransferFormValues>
            name="luggagePolicy.cabinBaggage"
            label="Cabin Baggage"
            type="number"
            placeholder="Enter cabin baggage quantity"
          />

          <FormSwitch<AirportTransferFormValues>
            name="luggagePolicy.oversizedAllowed"
            label="Oversized Allowed"
          />

          <FormInput<AirportTransferFormValues>
            name="luggagePolicy.oversizedFee"
            label="Oversized Fee"
            type="number"
            placeholder="Enter oversized fee"
          />

          <FormSwitch<AirportTransferFormValues>
            name="luggagePolicy.sportsEquipmentAllowed"
            label="Sports Equipment Allowed"
          />

          <FormSwitch<AirportTransferFormValues>
            name="luggagePolicy.strollerAllowed"
            label="Stroller Allowed"
          />

          <FormSwitch<AirportTransferFormValues>
            name="luggagePolicy.wheelchairAllowed"
            label="Wheelchair Allowed"
          />
        </div>
      </FormSection>

      {/* Passenger Requirement */}
      <FormSection
        title="Passenger Requirement"
        description="Passenger information requirements"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<AirportTransferFormValues>
            name="passengerRequirement.passportRequired"
            label="Passport Required"
          />

          <FormSwitch<AirportTransferFormValues>
            name="passengerRequirement.phoneRequired"
            label="Phone Required"
          />

          <FormSwitch<AirportTransferFormValues>
            name="passengerRequirement.emailRequired"
            label="Email Required"
          />

          <FormInput<AirportTransferFormValues>
            name="passengerRequirement.minimumPassenger"
            label="Minimum Passenger"
            type="number"
            placeholder="Enter minimum passenger"
          />

          <FormInput<AirportTransferFormValues>
            name="passengerRequirement.maximumPassenger"
            label="Maximum Passenger"
            type="number"
            placeholder="Enter maximum passenger"
          />
        </div>
      </FormSection>

      {/* Special Request */}
      <FormSection
        title="Special Request"
        description="Additional customer requirements"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<AirportTransferFormValues>
            name="specialRequest.childSeat"
            label="Child Seat"
          />

          <FormSwitch<AirportTransferFormValues>
            name="specialRequest.babySeat"
            label="Baby Seat"
          />

          <FormSwitch<AirportTransferFormValues>
            name="specialRequest.boosterSeat"
            label="Booster Seat"
          />

          <FormSwitch<AirportTransferFormValues>
            name="specialRequest.wheelchair"
            label="Wheelchair"
          />

          <FormSwitch<AirportTransferFormValues>
            name="specialRequest.petTransport"
            label="Pet Transport"
          />

          <FormSwitch<AirportTransferFormValues>
            name="specialRequest.bicycle"
            label="Bicycle"
          />

          <FormSwitch<AirportTransferFormValues>
            name="specialRequest.skiEquipment"
            label="Ski Equipment"
          />

          <FormSwitch<AirportTransferFormValues>
            name="specialRequest.golfBag"
            label="Golf Bag"
          />

          <FormSwitch<AirportTransferFormValues>
            name="specialRequest.additionalStop"
            label="Additional Stop"
          />

          <FormSwitch<AirportTransferFormValues>
            name="specialRequest.noteSupported"
            label="Note Supported"
          />
        </div>
      </FormSection>

      {/* Contact Information */}
      <FormSection
        title="Contact Information"
        description="Support contact details"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="contactInformation.hotline"
            label="Hotline"
            placeholder="Enter hotline number"
          />

          <FormInput<AirportTransferFormValues>
            name="contactInformation.whatsapp"
            label="WhatsApp"
            placeholder="Enter WhatsApp number"
          />

          <FormInput<AirportTransferFormValues>
            name="contactInformation.telegram"
            label="Telegram"
            placeholder="Enter Telegram username"
          />

          <FormInput<AirportTransferFormValues>
            name="contactInformation.emergencyPhone"
            label="Emergency Phone"
            placeholder="Enter emergency phone number"
          />

          <FormInput<AirportTransferFormValues>
            name="contactInformation.supportEmail"
            label="Support Email"
            placeholder="Enter support email"
          />
        </div>
      </FormSection>
    </>
  );
}
