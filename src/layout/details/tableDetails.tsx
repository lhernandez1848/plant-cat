type TableDetailsProps = {
  header: string;
  detail: string;
};

export default function TableDetails({ data }: { data: TableDetailsProps[] }) {
  return <table className="my-6 w-4/5">
    <tbody>
      {data.map((item, index) => (
        <tr className="odd:bg-white even:bg-teal-100 border-b border-gray-200" key={item.header + index}>
          <th className="px-4 py-1 text-semibold">{item.header}</th>
          <td className="px-4 py-1">{item.detail}</td>
        </tr>
      ))}
    </tbody>
  </table>
}