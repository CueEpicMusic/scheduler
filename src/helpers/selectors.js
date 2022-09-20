export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find((item) => item.name === day);
  if (!filteredDay) {
    return [];
  }
  return filteredDay.appointments.map(
    (appointmentId) => state.appointments[appointmentId]
  );
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewerId = interview.interviewer;
  return {
    student: interview.student,
    interviewer: state.interviewers[interviewerId],
  };
}

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.find((item) => item.name === day);
  if (!filteredDay) {
    return [];
  }
  return filteredDay.interviewers.map(
    (interviewersId) => state.interviewers[interviewersId]
  );
}
