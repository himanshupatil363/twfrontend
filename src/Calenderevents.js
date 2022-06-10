import React from "react";

const Calenderevents = ({ events }) => {
  return (
    <div className="m-20">
      <table>
        <tr className="bg-blue-200 rounded-t">
          <th className="h-14 border text-center rounded-tl">Summary</th>
          <th className="h-14 border text-center">Creator</th>
          <th className="h-14 border text-center">Status</th>
          <th className="h-14 border text-center rounded-tr">Link</th>
        </tr>
        {events?.map((meeting) => (
          <tr key={meeting.id}>
            <td className=" p-4 border text-center">{meeting.summary}</td>
            <td className=" p-4 border text-center">
              {meeting.creator?.email}
            </td>
            <td className=" p-4 border text-center">{meeting.status}</td>
            <td className=" p-4 border text-center">
              <a
                className="text-blue-700"
                target="_blank"
                rel="noreferrer"
                href={meeting.htmlLink}
              >
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
