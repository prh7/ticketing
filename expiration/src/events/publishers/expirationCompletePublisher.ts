import { Subjects, Publisher, ExpirationCompleteEvent } from "@phticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
    
}