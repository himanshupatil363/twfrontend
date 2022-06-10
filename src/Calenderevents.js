import React from "react";

const Calenderevents = ({ events }) => {
  return (
    <div className="m-20">
      <table>
        <tr className="border">
          <th className="border text-center">Summary</th>
          <th className="border text-center">Creator</th>
          <th className="border text-center">Status</th>
          <th className="border text-center">Link</th>
        </tr>
        {events?.map((meeting) => (
          <tr key={meeting.id}>
            <td className="border text-center">{meeting.summary}</td>
            <td className="border text-center">{meeting.creator?.email}</td>
            <td className="border text-center">{meeting.status}</td>
            <td className="border text-center">
              <a target="_blank" rel="noreferrer" href={meeting.htmlLink}>
                {meeting.htmlLink}
              </a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Calenderevents;
