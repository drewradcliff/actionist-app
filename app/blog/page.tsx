import Image from "next/image";
import Header from "../header";

export default function Blog() {
  return (
    <div>
      <Header />
      <div className="mx-auto py-52 prose px-8">
        <article className="prose mx-auto flex flex-col">
          <h1>Actionist, the doing app</h1>
          <figcaption>April 2, 2024</figcaption>
          <p>
            With so many todo apps on the market already, do we really need
            another one?
          </p>
          <Image
            alt="list of popular todo icons"
            src="/blog/Untitled.png"
            width={500}
            height={500}
          />
          <p>
            No you probably don’t, but we think you might need a digital scratch
            paper.
          </p>
          <Image
            alt="actionist logo"
            src="/blog/Untitled 1.png"
            width={500}
            height={500}
          />
          <p>Actionist is that scratch paper turned todo notes.</p>
          <p>
            Feeling pulled in a million directions by countless tasks? This app
            is your solution. Just jot down your to-dos and start ticking them
            off visually.
          </p>
          <p>
            Research shows that it’s best for our brain to not multi-task, but
            this app is how, if you really have to (or want to, if you have ADHD
            like me):
          </p>
          <Image
            className="self-center"
            alt="actionist todo screenshot"
            src="/blog/Untitled 2.png"
            width={300}
            height={300}
          />
          <p>
            Actionist allows you to change your task from TODO to DOING; with
            the DOING items pinned at the top, hopefully if you get distracted
            you can find your way back on track!
          </p>
          <h2>A little background story</h2>
          <p>If I don’t write it down, it won’t get done.</p>
          <p>If I write them all down, it becomes overwhelming.</p>
          <p>
            Here is a screenshot of what my main todo app (things3) inbox looks
            like.
          </p>
          <Image
            alt="things3 screenshot"
            src="/blog/Untitled 3.png"
            width={500}
            height={500}
          />
          <p>
            To this date, I still have countless items in things3 that would
            probably will just keep wander in that void space that they call
            cloud.
          </p>
          <p>Have I tried other apps?</p>
          <p>
            Oh you mean apps with more complexity, functionality and basically
            more buttons?
          </p>
          <p>
            Unfortunately, I have. Nope they don’t do it for me. I get lost
            trying to get everything organized.
          </p>
          <h2>The intended usage of actionist</h2>
          <p>
            Take a look at your actual todos, look through your emails, your
            priorities systems, then, close your eyes and sip a coffee; now,
            what can you <em>actually</em> do at this moment?
          </p>
          <p>Write them down, tick them off.</p>
          <p>When you are done, just “pull to archive all”.</p>
          <p>
            You can even “archieve all” without being done — beauty of (an
            electronic) scratch paper.
          </p>
          <p></p>
          <Image
            className="self-center"
            alt="actionist archive screenshot"
            src="/blog/Untitled.jpeg"
            width={300}
            height={300}
          />
          <p>
            Alternatively, when a task is too big and too duanting, you are
            start by breaking them down like so:
          </p>
          <Image
            className="self-center"
            alt="actionist todos screenshot"
            src="/blog/Untitled 1.jpeg"
            width={300}
            height={300}
          />
          <p>
            At this point you probably noticed that this app is not intended for
            keeping and indexing your todos, please use another app for todos
            like “how do i find meaning of life”. Actionist wants you to focus
            on the actionables, now.
          </p>
        </article>
      </div>
    </div>
  );
}
