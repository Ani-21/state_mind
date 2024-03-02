type ClientPageProps = {
  params: {
    clientId: string;
  };
};

export default function ClientPage(props: ClientPageProps) {
  const { params } = props;

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Client Page</h1>
      <p>{params.clientId}</p>
    </main>
  );
}
